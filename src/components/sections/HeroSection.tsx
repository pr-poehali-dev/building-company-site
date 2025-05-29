import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          СтройМастер
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-open-sans">
          Строим дома вашей мечты с 2010 года
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto font-open-sans">
          Профессиональное строительство частных домов, коттеджей и коммерческих
          объектов. Полный цикл работ от проекта до сдачи под ключ.
        </p>
        <Button
          size="lg"
          className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3"
        >
          Получить консультацию
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
