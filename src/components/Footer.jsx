

const Footer = () => {
  return (
    <footer className="bg-gray-700/40 dark:bg-black/90 dark:text-white  py-12 px-4 border-t ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>

        <div className="flex space-x-4">
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#privacy" className="hover:text-gray-400 transition">Privacy</a>
          <a href="#terms" className="hover:text-gray-400 transition">Terms</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
