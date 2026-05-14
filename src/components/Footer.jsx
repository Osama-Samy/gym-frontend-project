const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-8">
            <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm md:text-base">&copy; 2026 Osama Gym. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;