import { motion } from "motion/react";
import { GraduationCap, BookOpen, Coins, Megaphone } from "lucide-react";
import { SERVICES_DATA } from "../data";

export default function Services() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "training":
        return <GraduationCap className="w-8 h-8 text-[#72BF44]" />;
      case "knowledge":
        return <BookOpen className="w-8 h-8 text-[#0072CE]" />;
      case "csr":
        return <Coins className="w-8 h-8 text-[#72BF44]" />;
      case "awareness":
        return <Megaphone className="w-8 h-8 text-[#F7941D]" />;
      default:
        return <BookOpen className="w-8 h-8 text-[#0072CE]" />;
    }
  };

  const getBorderColor = (colorClass: string) => {
    switch (colorClass) {
      case "tertiary":
        return "border-l-4 border-l-[#F7941D]";
      case "secondary":
        return "border-l-4 border-l-[#72BF44]";
      case "primary":
        return "border-l-4 border-l-[#0072CE]";
      default:
        return "";
    }
  };

  return (
    <section
      id="services-section"
      className="py-24 bg-[#0072CE] text-white scroll-mt-20 leading-tight"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header content */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4">Core Programs</h2>
          <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed">
            Community-focused programs designed to build awareness, develop skills, and create
            sustainable impact through collaborative partnerships.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <motion.div
              layoutId={`service-card-${service.id}`}
              key={service.id}
              className={`bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between min-h-[220px] ${getBorderColor(service.colorClass)}`}
            >
              <div>
                <span className="inline-block mb-6">{getServiceIcon(service.id)}</span>
                <h4 className="text-xl font-bold font-headline mb-3 text-white">{service.title}</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
