import { collection, addDoc, updateDoc, deleteDoc, doc, writeBatch, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { z } from 'zod';

export interface RSVP {
  id: string;
  name: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no';
  guests?: string; // Make guests optional
  foodRestrictions?: string;
  comments?: string;
  timestamp: Timestamp;
}

const RSVPSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  attending: z.enum(['yes', 'no']),
  guests: z.string().optional(),
  foodRestrictions: z.string().optional(),
  comments: z.string().optional(),
});

export function validateRSVP(data: unknown) {
  return RSVPSchema.parse(data);
}

export async function addRSVP(rsvpData: Omit<RSVP, 'id' | 'timestamp'>) {
  try {
    const validatedData = validateRSVP(rsvpData);
    const docRef = await addDoc(collection(db, 'rsvps'), {
      ...validatedData,
      timestamp: Timestamp.now()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function updateRSVP(id: string, updateData: Partial<RSVP>) {
  try {
    const rsvpRef = doc(db, 'rsvps', id);
    await updateDoc(rsvpRef, updateData);
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
}

export async function deleteRSVP(id: string) {
  try {
    await deleteDoc(doc(db, 'rsvps', id));
    console.log("Document deleted successfully");
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
}

export async function batchUpdateRSVPs(updates: { id: string, data: Partial<RSVP> }[]) {
  const batch = writeBatch(db);

  updates.forEach(({ id, data }) => {
    const rsvpRef = doc(db, 'rsvps', id);
    batch.update(rsvpRef, data);
  });

  try {
    await batch.commit();
    console.log("Batch update successful");
  } catch (e) {
    console.error("Error in batch update: ", e);
    throw e;
  }
}

export async function getAttendingRSVPs() {
  const q = query(collection(db, 'rsvps'), where('attending', '==', 'yes'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as RSVP));
}