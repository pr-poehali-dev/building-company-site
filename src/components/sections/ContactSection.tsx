import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
