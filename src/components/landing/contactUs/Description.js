const Description = () => {
  return (
    <div className="w-[627px] flex flex-col items-start px-[16px] py-[32px] gap-[32px] min-[360px]:px-[88px] min-[360px]:grow">
      <div className="flex flex-row items-start p-0 gap-[32px]">
        <h2 className="font-bold text-[32px] leading-[39px] text-[#334155]">
          Contact us
        </h2>
        <img className="w-[40px] h-[40px] order-1" src="/images/landing/rocket.png"/>
      </div>
      <p className="text-[16px] leading-[24px] flex items-center text-[#6B7280] order-1">
        We'd love to hear from you! Reach out to us using the contact form below for a quote or to schedule a consultation. Whether you're seeking to enhance your current ERP system with seamless integrations, customizations, reporting or forms, or you're simply curious about our unique Customization Library, our team is ready to assist. 
        <br />
        <br />
        At Deployment Hero, we believe in creating ERP solutions that truly fit your business. Let's start the conversation today and put your business on the path to operational excellence.
      </p>
    </div>
  )
}

export default Description