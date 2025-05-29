import ServiceCard from "@/components/cards/ServiceCard";

const servicesData = [
  {
    icon: "🏠",
    title: "Частные дома",
    description:
      "Строительство индивидуальных жилых домов по типовым и авторским проектам",
    content:
      "От фундамента до кровли. Работаем с любыми материалами: кирпич, газобетон, дерево.",
  },
  {
    icon: "🏢",
    title: "Коммерческие объекты",
    description:
      "Офисные здания, торговые центры, склады и производственные помещения",
    content:
      "Быстрое строительство с соблюдением всех норм и требований для бизнеса.",
  },
  {
    icon: "🔧",
    title: "Реконструкция",
    description:
      "Капитальный ремонт, перепланировка и модернизация существующих зданий",
    content:
      "Даем вторую жизнь старым постройкам с использованием современных технологий.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
          Наши услуги
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
