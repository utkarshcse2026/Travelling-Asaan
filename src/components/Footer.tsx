export function Footer() {
  return (
    <footer className="bg-[#042759] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Log in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cookie policy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Company Details
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Trips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  International Sites
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <select className="bg-[#0a3977] text-white px-4 py-2 rounded">
                <option>India - English (UK)</option>
              </select>
              <select className="bg-[#0a3977] text-white px-4 py-2 rounded">
                <option>₹ INR</option>
              </select>
            </div>
            <p className="text-sm text-gray-400 mt-8">Cheap flight booking from anywhere to everywhere</p>
            <p className="text-sm text-gray-400 mt-2">© Skyscanner Ltd 2002 – 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

