import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Базовый курс маникюра',
    description: 'Изучите основы маникюра с нуля: подготовка ногтей, покрытие гель-лаком, уход за кутикулой',
    duration: '4 недели',
    level: 'Начинающий',
    price: '15 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4b72e5a3-4bd2-4881-8094-30ea7adb1fc3/files/439f614c-2b23-4fb0-8506-ad3e871529c2.jpg',
    features: ['Теория и практика', 'Сертификат', 'Набор материалов']
  },
  {
    id: 2,
    title: 'Nail-арт и дизайн',
    description: 'Освойте техники создания сложного дизайна: градиенты, стемпинг, роспись, работа с декором',
    duration: '3 недели',
    level: 'Продвинутый',
    price: '18 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4b72e5a3-4bd2-4881-8094-30ea7adb1fc3/files/db973432-c3c0-4ff1-95e2-ba1bffd6e08b.jpg',
    features: ['20+ техник дизайна', 'Работа с клиентами', 'Портфолио']
  },
  {
    id: 3,
    title: 'Мастер-класс PRO',
    description: 'Продвинутые техники для профессионалов: наращивание, коррекция, сложные дизайны с инкрустацией',
    duration: '6 недель',
    level: 'Эксперт',
    price: '25 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4b72e5a3-4bd2-4881-8094-30ea7adb1fc3/files/041fff39-cd23-4b6b-a3a8-f07e8a8ec8d4.jpg',
    features: ['Индивидуальный подход', 'Бизнес-консультация', 'Трудоустройство']
  }
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время для записи на курс "${selectedCourse?.title}"`);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Профессиональное обучение</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Курсы маникюра
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Станьте востребованным мастером маникюра за 4-6 недель. Обучение от практикующих специалистов
          </p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
            {[
              { icon: 'Award', title: 'Сертификат', desc: 'Официальный документ' },
              { icon: 'Users', title: 'Опыт', desc: 'Более 500 выпускников' },
              { icon: 'Briefcase', title: 'Трудоустройство', desc: 'Помощь в поиске работы' },
              { icon: 'Clock', title: 'Гибкий график', desc: 'Дневные и вечерние группы' }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Наши курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary backdrop-blur-sm hover:bg-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>Длительность: {course.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {course.price}
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-semibold"
                        onClick={() => setSelectedCourse(course)}
                      >
                        Записаться на курс
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Запись на курс</DialogTitle>
                        <DialogDescription>
                          {selectedCourse?.title} - {selectedCourse?.price}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input 
                            id="name" 
                            placeholder="Анна" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+7 (999) 123-45-67" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="anna@example.com" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p>© 2024 Курсы маникюра. Все права защищены</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
