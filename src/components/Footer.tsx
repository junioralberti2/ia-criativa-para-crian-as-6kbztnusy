import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold font-heading mb-4">
              IA Criativa para Crianças
            </h3>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Transformando o tempo de tela em aprendizado criativo. Prepare seu
              filho para o futuro com a metodologia pioneira no Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/junioralberti/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586906436788"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#modules"
                  className="hover:text-white transition-colors"
                >
                  O Curso
                </a>
              </li>
              <li>
                <a
                  href="/#benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="/#author"
                  className="hover:text-white transition-colors"
                >
                  Sobre o Autor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>cursoiacriativa2026@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/5548992068976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold"
                >
                  (48) 99206-8976
                </a>
              </li>
              <li>Seg - Sex, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} IA Criativa. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/termos-de-uso" className="hover:text-slate-300">
              Termos de Uso
            </Link>
            <Link
              to="/politica-de-privacidade"
              className="hover:text-slate-300"
            >
              Política de Privacidade
            </Link>
            <Link to="/garantia" className="hover:text-slate-300">
              Garantia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
