import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  content: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  content,
}: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
        <CardTitle className="font-montserrat">{title}</CardTitle>
        <CardDescription className="font-open-sans">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 font-open-sans">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
