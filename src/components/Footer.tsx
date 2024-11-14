export default function Footer() {
  return (
    <footer className="bg-[#e9edc9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#8B4513] relative inline-block">
              Azwi & Sbo Wedding
            </h3>
            <p className="text-[#6B4423]">Celebrating our love story</p>
          </div>
          <div className="text-center sm:text-right text-[#6B4423] text-sm">
            © {new Date().getFullYear()} Azwi & Sbo. All rights reserved.
          </div>
        </div>
        <div className="border-t border-[#D4B996] mt-4"></div>
        <a 
          href="https://devmajxr.co.za" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 text-[15px] text-[#000000] opacity-50 hover:opacity-100 transition-opacity self-center"
        >
          Website by Dev Majxr
        </a>
      </div>
    </footer>
  )
}