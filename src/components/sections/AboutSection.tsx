import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
              О компании
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-open-sans">
              СтройМастер — это команда профессионалов с более чем 13-летним
              опытом в строительной отрасли. Мы выполнили свыше 200 проектов
              различной сложности.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2 font-montserrat">
                  200+
                </div>
                <div className="text-gray-600 font-open-sans">
                  Завершенных проектов
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2 font-montserrat">
                  13
                </div>
                <div className="text-gray-600 font-open-sans">Лет на рынке</div>
              </div>
            </div>
            <ul className="space-y-3 font-open-sans">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Собственная проектная группа
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Гарантия качества 5 лет
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Работаем по договору
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Прозрачное ценообразование
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Строительная площадка"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
