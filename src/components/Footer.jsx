import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#fdf4e2] text-white py-8 px-4 mt-7">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-black">Company</h3>
              <ul>
                <li><a href="#" className="text-black">About Us</a></li>
                <li><a href="#" className="text-black">Careers</a></li>
                <li><a href="#" className="text-black">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-4 text-black">Support</h3>
              <ul>
                <li><a href="#" className="text-black">Contact</a></li>
                <li><a href="#" className="text-black">FAQs</a></li>
                <li><a href="#" className="text-black">Help Center</a></li>
              </ul>
            </div>
    
            <div>
              <h3 className="font-semibold text-xl mb-4 text-black">Social</h3>
              <ul>
                <li><a href="#" className="text-black ">Facebook</a></li>
                <li><a href="#" className="text-black ">Twitter</a></li>
                <li><a href="#" className="text-black ">Instagram</a></li>
              </ul>
            </div>
    
            <div>
              <h3 className="font-semibold text-xl mb-4 text-black">Subscribe</h3>
              <input
                type="email"
                placeholder="Your email"
                className="p-2 w-full text-gray-700 rounded mb-4"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
                Subscribe
              </button>
            </div>
          </div>
    
          <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-black">&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </footer>
      );
    };

export default Footer