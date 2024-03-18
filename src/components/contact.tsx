export default function ContactMe() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="my-4 text-2xl text-gray-500">
      If you'd like to chat about a project or just have question, please fill in the form below. I aim to get back within 2 days.
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full">
          <label htmlFor="name" className="font-bold text-gray-500 text-lg">NAME <span className="text-red-600">*</span></label>
          <input id="name" type="text" className="h-12 contact-input" />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="font-bold text-gray-500 text-lg">EMAIL <span className="text-red-600">*</span></label>
          <input id="email" type="email" className="h-12 contact-input" />
        </div>
      </div>
      <label htmlFor="subject" className="font-bold text-gray-500 text-lg">SUBJECT <span className="text-red-600">*</span></label>
      <input id="subject" type="text" className="h-12 contact-input" />
      <label htmlFor="message" className="font-bold text-gray-500 text-lg">MESSAGE <span className="text-red-600">*</span></label>
      <textarea id="message" className="h-40 contact-input"></textarea>
      <button className="blue-btn">Send Message</button>
    </div>
  )
}
