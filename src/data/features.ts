import {
  Archive, ArrowRightLeft, ScanSearch, MapPin, History, Bell,
  BarChart3, Camera, ShieldCheck, Plug,
} from "lucide-react";

export const features = [
  { icon: Archive, title: "Tudo catalogado em um só lugar", text: "Cadastro centralizado de componentes, peças e ferramentas." },
  { icon: ArrowRightLeft, title: "Controle de entrada e saída", text: "Registre cada movimentação com poucos cliques." },
  { icon: ScanSearch, title: "Busca rápida", text: "Encontre por item, categoria ou local de armazenamento." },
  { icon: MapPin, title: "Localização de armazenamento", text: "Saiba exatamente onde cada peça deve estar." },
  { icon: History, title: "Histórico de movimentações", text: "Acompanhe o que entrou, saiu e quem utilizou." },
  { icon: Bell, title: "Alertas de estoque crítico", text: "Receba avisos antes que falte algo essencial." },
  { icon: BarChart3, title: "Relatórios de disponibilidade", text: "Visão clara do inventário para tomar decisões." },
  { icon: Camera, title: "Reconhecimento por imagem", text: "Identificação visual de componentes, em evolução.", experimental: true },
  { icon: ShieldCheck, title: "Auditoria para coordenação", text: "Conferências mais simples e rastreáveis." },
  { icon: Plug, title: "Pronto para API externa", text: "Preparado para integrar com sistemas existentes." },
];
