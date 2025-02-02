const ContactForm =() =>{
    return (
      <div className="bg-blue-50 p-8 rounded-xl max-w-2xl mx-auto shadow-md">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Last Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Job Title <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Job Title" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Company Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Company Name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
            <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea placeholder="Let us know how we can help you!" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"></textarea>
          </div>
          <p className="text-gray-600 text-sm">
            By submitting this form, you confirm that you agree to the processing of your personal data by <strong className="text-gray-800">AnyTech</strong> as described in the <a href="#" className="text-blue-600 underline">privacy policy</a>.
          </p>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Submit &rarr;
          </button>
        </form>
      </div>
    );
  }
export default ContactForm;  