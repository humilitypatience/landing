import ServiceCard from "./ServiceCard";

const ServiceCardContainer = () => {
  const serviceContents = [
    {
      iconUrl: '/images/landing/integrationsicon.png',
      futureHead: 'Integrations',
      futureContent: 'At Deployment Hero, we understand the importance of seamless ERP integration. Our team of experts possesses deep knowledge across major ERP platforms, ensuring your systems...'
    },
    {
      iconUrl: '/images/landing/customizationsicon.png',
      futureHead: 'Customizations',
      futureContent: "Every business is unique, and so are its needs. Our customization services aim to mold your ERP system to perfectly fit your business operations. Whether you need custom workflows, user interfaces..."
    },
    {
      iconUrl: '/images/landing/reportingicon.png',
      futureHead: 'Reporting',
      futureContent: "Data drives decision-making, but raw data isn't enough; you need meaningful insights. Our team at Deployment Hero can leverage your ERP data to generate comprehensive, easy-to-..."
    },
    {
      iconUrl: '/images/landing/formsicon.png',
      futureHead: 'Forms',
      futureContent: "Forms are the backbone of data entry in ERP systems. However, generic forms may not capture all the data your business needs. Our form customization services ensure your ERP system collects data that's..."
    }
  ]
  return (
    <div className="w-full flex flex-col items-start p-0 gap-[16px] order-1 min-[360px]:flex-row">
      {
        serviceContents.map(serviceContent => (
          <ServiceCard {...serviceContent} />
        ))
      }
    </div>
  )
}

export default ServiceCardContainer