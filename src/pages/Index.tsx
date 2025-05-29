import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />

      {/* About Section */}
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
                  <div className="text-gray-600 font-open-sans">
                    Лет на рынке
                  </div>
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

      {/* Contact Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-xl mb-10 font-open-sans">
            Готовы обсудить ваш проект? Звоните или пишите!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="text-3xl mb-2">📞</div>
                <CardTitle className="text-white font-montserrat">
                  Телефон
                </CardTitle>
                <CardDescription className="text-white/80 font-open-sans">
                  +7 (495) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="text-3xl mb-2">✉️</div>
                <CardTitle className="text-white font-montserrat">
                  Email
                </CardTitle>
                <CardDescription className="text-white/80 font-open-sans">
                  info@stroymaster.ru
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
