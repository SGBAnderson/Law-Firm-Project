"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Scale,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

export default function LawFirmLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, area: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        area: "",
        message: "",
      })
      setFormSubmitted(false)
    }, 3000)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0F2C59] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Scale className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Exemplo & Exemplo</span>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => scrollToSection(e, "home")}
            >
              Início
            </a>
            <a
              href="#areas"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => scrollToSection(e, "areas")}
            >
              Áreas de Atuação
            </a>
            <a
              href="#about"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => scrollToSection(e, "about")}
            >
              Sobre
            </a>
            <a
              href="#testimonials"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => scrollToSection(e, "testimonials")}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0F2C59] border-t border-blue-900">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a
                href="#home"
                className="py-2 hover:text-green-400 transition-colors"
                onClick={(e) => scrollToSection(e, "home")}
              >
                Início
              </a>
              <a
                href="#areas"
                className="py-2 hover:text-green-400 transition-colors"
                onClick={(e) => scrollToSection(e, "areas")}
              >
                Áreas de Atuação
              </a>
              <a
                href="#about"
                className="py-2 hover:text-green-400 transition-colors"
                onClick={(e) => scrollToSection(e, "about")}
              >
                Sobre
              </a>
              <a
                href="#testimonials"
                className="py-2 hover:text-green-400 transition-colors"
                onClick={(e) => scrollToSection(e, "testimonials")}
              >
                Depoimentos
              </a>
              <a
                href="#contact"
                className="py-2 hover:text-green-400 transition-colors"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-[#0F2C59] text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Exemplo & Exemplo Advogados Associados
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Defendendo os direitos do cidadão e dos trabalhadores
              </p>
              <Button
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-6 text-lg rounded-md"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Agende uma consulta gratuita
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section id="areas" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F2C59]">Áreas de Atuação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Criminal Law */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#0F2C59] p-4 rounded-full mb-4">
                    <Scale className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Direito Criminal</h3>
                  <p className="text-gray-600">
                    Defesa técnica especializada em processos criminais, garantindo seus direitos e a melhor estratégia
                    jurídica para seu caso.
                  </p>
                  <Button variant="link" className="mt-4 text-[#2E7D32]">
                    Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Civil Law */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#0F2C59] p-4 rounded-full mb-4">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Direito Cível</h3>
                  <p className="text-gray-600">
                    Assessoria completa em questões cíveis, incluindo contratos, responsabilidade civil, direito do
                    consumidor e questões familiares.
                  </p>
                  <Button variant="link" className="mt-4 text-[#2E7D32]">
                    Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Labor Law */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#0F2C59] p-4 rounded-full mb-4">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Direito Trabalhista</h3>
                  <p className="text-gray-600">
                    Proteção aos direitos dos trabalhadores, com atuação em reclamações trabalhistas, negociações e
                    consultoria preventiva.
                  </p>
                  <Button variant="link" className="mt-4 text-[#2E7D32]">
                    Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="bg-[#0F2C59] w-full h-full absolute -top-4 -left-4 rounded-lg"></div>
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Escritório Exemplo & Exemplo"
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F2C59]">Sobre o Escritório</h2>
                <p className="text-gray-700 mb-4">
                  Fundado com o compromisso de oferecer serviços jurídicos de excelência, o escritório Henrique &
                  Marinhos Advogados Associados atua há mais de 15 anos no mercado, construindo uma reputação sólida
                  baseada na ética, competência e resultados.
                </p>
                <p className="text-gray-700 mb-4">
                  Nossa equipe é formada por profissionais altamente qualificados e especializados em diferentes áreas
                  do Direito, prontos para oferecer soluções jurídicas personalizadas para cada cliente.
                </p>
                <p className="text-gray-700 mb-6">
                  Nosso compromisso é com a justiça e a defesa incansável dos interesses de nossos clientes, sempre
                  pautados pela ética e pela excelência profissional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="bg-[#2E7D32] h-12 w-1 mr-3"></div>
                    <div>
                      <p className="font-bold text-2xl text-[#0F2C59]">15+</p>
                      <p className="text-gray-600">Anos de experiência</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#2E7D32] h-12 w-1 mr-3"></div>
                    <div>
                      <p className="font-bold text-2xl text-[#0F2C59]">500+</p>
                      <p className="text-gray-600">Casos de sucesso</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#2E7D32] h-12 w-1 mr-3"></div>
                    <div>
                      <p className="font-bold text-2xl text-[#0F2C59]">98%</p>
                      <p className="text-gray-600">Clientes satisfeitos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F2C59]">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="border-t-4 border-t-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow">
                      "O atendimento do escritório Exemplo & Exemplo foi excepcional. Resolveram meu caso trabalhista
                      com profissionalismo e dedicação, garantindo todos os meus direitos."
                    </p>
                    <div className="mt-4">
                      <p className="font-bold text-[#1A1A1A]">Carlos Silva</p>
                      <p className="text-gray-500 text-sm">Cliente desde 2019</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-t-4 border-t-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow">
                      "Quando precisei de assistência jurídica em um processo cível complexo, o escritório demonstrou
                      conhecimento técnico e comprometimento. Recomendo fortemente."
                    </p>
                    <div className="mt-4">
                      <p className="font-bold text-[#1A1A1A]">Ana Oliveira</p>
                      <p className="text-gray-500 text-sm">Cliente desde 2020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-t-4 border-t-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-[#2E7D32]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow">
                      "A equipe do Exemplo & Exemplo foi fundamental na defesa do meu caso criminal. Profissionais
                      sérios, competentes e que realmente se importam com seus clientes."
                    </p>
                    <div className="mt-4">
                      <p className="font-bold text-[#1A1A1A]">Roberto Mendes</p>
                      <p className="text-gray-500 text-sm">Cliente desde 2018</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0F2C59]">Entre em Contato</h2>
              <p className="text-center text-gray-600 mb-8">
                Preencha o formulário abaixo para agendar uma consulta gratuita ou tirar suas dúvidas.
              </p>

              <Card className="border-none shadow-xl">
                <CardContent className="p-6 md:p-8">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 text-[#2E7D32] p-4 rounded-md mb-4">
                        <p className="font-bold">Mensagem enviada com sucesso!</p>
                        <p>Entraremos em contato em breve.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Seu nome completo"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu.email@exemplo.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(00) 00000-0000"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="area">Área de interesse</Label>
                          <Select value={formData.area} onValueChange={handleSelectChange}>
                            <SelectTrigger id="area">
                              <SelectValue placeholder="Selecione uma área" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="criminal">Direito Criminal</SelectItem>
                              <SelectItem value="civil">Direito Cível</SelectItem>
                              <SelectItem value="labor">Direito Trabalhista</SelectItem>
                              <SelectItem value="other">Outra área</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Descreva brevemente seu caso ou dúvida"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                        Enviar mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#0F2C59] py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Precisando de assistência jurídica?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para defender seus direitos e interesses com excelência e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Agende uma consulta gratuita
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0F2C59]"
              >
                <Phone className="mr-2 h-4 w-4" /> (11) 5555-5555
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 mr-2" />
                <span className="text-lg font-bold">Exemplo & Exemplo</span>
              </div>
              <p className="text-gray-400 mb-4">
                Advocacia de excelência, comprometida com a defesa dos seus direitos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 text-[#2E7D32]" />
                  <span>(11) 5555-5555</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5 text-[#2E7D32]" />
                  <span>contato@exemplo.adv.br</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#2E7D32]" />
                  <span>
                    Av. Exemplo, 1000, Exemplo
                    <br />
                    XXXXXX - XX, 000000-000
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Horário de Atendimento</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>09:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-400">Atendimento emergencial 24h para casos criminais</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Exemplo & Exemplo Advogados Associados. Todos os direitos reservados.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

