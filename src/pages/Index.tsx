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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            СтройМастер
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-open-sans">
            Строим дома вашей мечты с 2010 года
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto font-open-sans">
            Профессиональное строительство частных домов, коттеджей и
            коммерческих объектов. Полный цикл работ от проекта до сдачи под
            ключ.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🏠</span>
                </div>
                <CardTitle className="font-montserrat">Частные дома</CardTitle>
                <CardDescription className="font-open-sans">
                  Строительство индивидуальных жилых домов по типовым и
                  авторским проектам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  От фундамента до кровли. Работаем с любыми материалами:
                  кирпич, газобетон, дерево.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🏢</span>
                </div>
                <CardTitle className="font-montserrat">
                  Коммерческие объекты
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Офисные здания, торговые центры, склады и производственные
                  помещения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Быстрое строительство с соблюдением всех норм и требований для
                  бизнеса.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <CardTitle className="font-montserrat">Реконструкция</CardTitle>
                <CardDescription className="font-open-sans">
                  Капитальный ремонт, перепланировка и модернизация существующих
                  зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Даем вторую жизнь старым постройкам с использованием
                  современных технологий.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
