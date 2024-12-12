import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define the Guest type
type Guest = {
  name: string;
  phone: string;
  email: string;
  guests: string[];
  foodRestrictions: string;
};

// Define the database
const database: Guest[] = [
  {
    name: "Freddy Mahlaola",
    phone: "0767901451",
    email: "Fransm@kyaenterprise.co.za",
    guests: ["Khumo Mahlaola", "Poppie Mahlaola", "Ntokozo Mahlaola", "Frans Mahlaola"],
    foodRestrictions: "none"
  },
  {
    name: "Smanga Mahlaola",
    phone: "0833646557",
    email: "sgillios.mahlaola@gmail.com",
    guests: ["Mohau Mahlaola", "Nqobile Mahlaola", "Nala Mahlaola", "Puseletso Motlhaoleng"],
    foodRestrictions: "none"
  },
  {
    name: "Sfiso Mahlaola",
    phone: "0818737379",
    email: "tknessmahlaola@gmail.com",
    guests: ["Zamani Dzanibe", "Lindo Mahlaola", "Khaya Mahlaola"],
    foodRestrictions: "none"
  },
  {
    name: "Rofhiwa",
    phone: "0794324222",
    email: "patrofhi@gmail.com",
    guests: ["Cedric Ntshavheni", "Thivhavhudzi Ntshavheni", "Khuliso Shavhani", "Mpho Shavhani", "Patricia Mafune"],
    foodRestrictions: "none"
  },
  {
    name: "Mpho Ntshavheni",
    phone: "0761497535",
    email: "mpho.ntshavheni@gmail.com",
    guests: ["Khakhathi Ntshavheni", "Thifhelimbilu Ntshavheni", "Margaret Ntshavheni"],
    foodRestrictions: "none"
  },
  {
    name: "Ntshavheni Vhutshilo",
    phone: "0722349418",
    email: "Ntshavhenivhutshilo07@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Munangiwa Ntshavheni",
    phone: "0814558936",
    email: "nangigold@gmail.com",
    guests: ["Thulani Mthembu", "Okuhle Mthembu"],
    foodRestrictions: "none"
  },
  {
    name: "Marcus Meela",
    phone: "0698996692",
    email: "meelamk@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Buhle",
    phone: "0614741082",
    email: "Buhle13@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Didi Fombad",
    phone: "0832984232",
    email: "paulinemmatladi@gmail.com",
    guests: ["Manga Fombad"],
    foodRestrictions: "none"
  },
  {
    name: "Lindelani Mudau",
    phone: "0731555554",
    email: "Vhadezz@yahoo.com",
    guests: ["Nelisiwe Mudau"],
    foodRestrictions: "none"
  },
  {
    name: "Resego Magano",
    phone: "0729578820",
    email: "nomondedhlamini@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Nqobizwe Shongwe",
    phone: "0728645240",
    email: "shongwenm@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Mapula Tloubatla",
    phone: "0609897509",
    email: "M.tloubatla01@gmail.com",
    guests: ["Matlatsa Tloubatla"],
    foodRestrictions: "none"
  },
  {
    name: "Antionette Lodewyk",
    phone: "0740586920",
    email: "antionettelodewyk84@gmail.com",
    guests: ["Mark Roberts"],
    foodRestrictions: "none"
  },
  {
    name: "Sibongile Mkhize",
    phone: "0761224574",
    email: "mkhizesibongile7@gmail.com",
    guests: ["Ntando Mkhize"],
    foodRestrictions: "none"
  },
  {
    name: "Katlego Mokoena",
    phone: "0725089321",
    email: "Katlegomokoena212@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Nkamogeleng Lebeloane",
    phone: "0710023376",
    email: "nkamogelenglebeloane@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Sbusiso Kabini",
    phone: "0768632371",
    email: "Sikhosanalucia32@yahoo.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Portia Mvubu",
    phone: "0815082699",
    email: "portianmvubu@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Bongani Phiri",
    phone: "0680922422",
    email: "_bongani@yahoo.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Theo Mateyu",
    phone: "0797436317",
    email: "theohannahmateyu@gmail.com",
    guests: ["Zonke Moreroa"],
    foodRestrictions: "none"
  },
  {
    name: "Nomonde Magano",
    phone: "0729578820",
    email: "nomondedhlamini@gmail.com",
    guests: ["Resego Magano"],
    foodRestrictions: "none"
  },
  {
    name: "Precious Vilakazi",
    phone: "0649239369",
    email: "Preciousvilakazi751@gmail.com",
    guests: ["Gcina Sibambo"],
    foodRestrictions: "none"
  },
  {
    name: "Mapitso Mathebula",
    phone: "0732734934",
    email: "Mapits@icloud.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Hleloluhle Ntombela",
    phone: "0848518491",
    email: "ntombelaoluhle@gmail.com",
    guests: ["Siphosenkosi Mabaso"],
    foodRestrictions: "Nuts and Pork"
  },
  {
    name: "Nomfundo Mavuso",
    phone: "0698996692",
    email: "nomfundoM@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Mantombi Shongwe",
    phone: "0795283711",
    email: "shongwemantombi@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Rirhandzu Mafuyeka",
    phone: "0767579423",
    email: "rmafuyeka5@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Moipone Nzimande",
    phone: "0732992643",
    email: "vavapadi5@gmail.com",
    guests: ["Xolani Machika"],
    foodRestrictions: "none"
  },
  {
    name: "Morongwe Kau",
    phone: "0679004765",
    email: "morongwekau@gmail.com",
    guests: ["Mandla Sindane"],
    foodRestrictions: "none"
  },
  {
    name: "Lucia Sikhosana",
    phone: "0713254927",
    email: "Mpumy20@gmail.com",
    guests: ["Partner"],
    foodRestrictions: "none"
  },
  {
    name: "Xolani Mathibela",
    phone: "0721740692",
    email: "xnmathibela@gmail.com",
    guests: ["Partner"],
    foodRestrictions: "none"
  },
  {
    name: "Sesi Mahlaola",
    phone: "0818737379",
    email: "tknessmahlaola@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Susan Mphetsheni",
    phone: "0848987477",
    email: "sphokazimphetsheni@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Thabang Maoto",
    phone: "0767261808",
    email: "maotolebo@icloud.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Mthofi Hlongwane",
    phone: "0614741082",
    email: "Buhle13@gmail.com",
    guests: [],
    foodRestrictions: "none"
  },
  {
    name: "Khumo Tlali",
    phone: "0658213693",
    email: "khumo.maboa@gmail.com",
    guests: ["Kananelo Tlali"],
    foodRestrictions: "none"
  },
  {
    name: "Kgaugelo Mmethi",
    phone: "0797945357",
    email: "kgaugeloderrick@gmail.com",
    guests: ["Ngwako Sebelele"],
    foodRestrictions: "none"
  }
];

export default function DashboardPage() {
  const totalGuests = database.reduce((acc, guest) => acc + guest.guests.length + 1, 0);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Final Guest List</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Guests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{totalGuests}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guest List</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Food Restrictions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {database.map((guest, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{guest.name}</TableCell>
                  <TableCell>{guest.phone}</TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>{guest.guests.length > 0 ? guest.guests.join(", ") : "None"}</TableCell>
                  <TableCell>{guest.foodRestrictions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

