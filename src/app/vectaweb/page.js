"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MenuIcon,
  XIcon,
  CodeIcon,
  PenToolIcon,
  LayoutIcon,
  SmartphoneIcon,
  StarIcon,
  ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";

export default function VectawebPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="bg-primary text-primary-foreground p-4 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vectaweb
          </motion.a>
          <div className="hidden md:flex space-x-4">
            {["About", "Services", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-secondary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
          <motion.button
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bg-primary text-primary-foreground p-4 md:hidden fixed w-full z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {["About", "Services", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "120% 120%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/txLpfbx/software-devs.jpg")',
            filter: "blur(2px) brightness(0.7)",
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to Vectaweb
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Innovative Software Solutions for Your Business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            About Us
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                width={500}
                height={500}
                src="/placeholder.svg?height=300&width=400"
                alt="About Vectaweb"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-4">
                Vectaweb is a leading software company specializing in creating
                innovative solutions for businesses of all sizes. With our team
                of expert developers and designers, we bring your ideas to life.
              </p>
              <p className="text-lg mb-4">
                Our mission is to empower businesses through technology,
                providing cutting-edge software solutions that drive growth and
                efficiency.
              </p>
              <Button variant="outline">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted py-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: CodeIcon,
                title: "Web Development",
                description:
                  "Custom websites and web applications tailored to your needs.",
              },
              {
                icon: SmartphoneIcon,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile apps for iOS and Android.",
              },
              {
                icon: LayoutIcon,
                title: "UI/UX Design",
                description:
                  "Intuitive and visually appealing user interfaces and experiences.",
              },
              {
                icon: PenToolIcon,
                title: "Branding & Identity",
                description:
                  "Comprehensive branding solutions to establish your digital presence.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            Our Portfolio
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div key={item} variants={fadeInUp}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <motion.img
                    src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                    alt={`Project ${item}`}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-secondary text-secondary-foreground py-20"
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "John Doe",
                company: "Tech Co",
                text: "Vectaweb delivered an outstanding web application that exceeded our expectations. Their team was professional and responsive throughout the project.",
              },
              {
                name: "Jane Smith",
                company: "Design Studio",
                text: "The mobile app Vectaweb created for us has significantly improved our customer engagement. We're thrilled with the results!",
              },
              {
                name: "Mike Johnson",
                company: "StartUp Inc",
                text: "Vectaweb's branding services helped us establish a strong digital presence. Their creativity and attention to detail are unmatched.",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, staggerChildren: 0.1 }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                        >
                          <StarIcon className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="mb-4">{testimonial.text}</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            {...fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Vectaweb. All rights reserved.</p>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="mx-2 hover:text-secondary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="mx-2 hover:text-secondary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
