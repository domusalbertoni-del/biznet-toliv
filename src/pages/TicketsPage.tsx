import { useState } from "react";
import { QrCode, Calendar, Clock, MapPin, ChevronDown, ChevronUp, Ticket, Download } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import club1Flyer from "@/assets/club-1-flyer.jpg";
import genesisFlyer from "@/assets/genesis-flyer.jpg";
import mamisongaFlyer from "@/assets/mamisonga-flyer.jpg";

interface TicketData {
  id: string;
  eventName: string;
  date: string;
  time: string;
  venue: string;
  ticketType: string;
  qrData: string;
  image: string;
  status: "upcoming" | "used" | "expired";
  orderNumber: string;
  quantity: number;
}

const mockTickets: TicketData[] = [
  { id: "t1", eventName: "Genesis", date: "06 MAR 2026", time: "23:00", venue: "Ignis Centro de Eventos, Santiago", ticketType: "Early Bird", qrData: "TOLIV-GEN-2026-001-A7X9", image: genesisFlyer, status: "upcoming", orderNumber: "TOL-89421", quantity: 2 },
  { id: "t2", eventName: "Club 1", date: "06 MAR 2026", time: "23:00", venue: "Recoleta, Santiago", ticketType: "General", qrData: "TOLIV-CL1-2026-002-B3K8", image: club1Flyer, status: "upcoming", orderNumber: "TOL-89355", quantity: 1 },
  { id: "t3", eventName: "Mamisonga", date: "08 MAR 2026", time: "23:00", venue: "Secret Spot, Peñaflor", ticketType: "VIP", qrData: "TOLIV-MAM-2026-003-C5M2", image: mamisongaFlyer, status: "used", orderNumber: "TOL-88901", quantity: 1 },
];

// Simple QR code SVG generator (deterministic pattern from string)
const QRCodeSVG = ({ data, size = 160 }: { data: string; size?: number }) => {
  const cells = 21;
  const cellSize = size / cells;
  
  // Generate deterministic pattern from string hash
  const hash = (s: string) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  };

  const seed = hash(data);
  const grid: boolean[][] = [];
  
  for (let y = 0; y < cells; y++) {
    grid[y] = [];
    for (let x = 0; x < cells; x++) {
      // Finder patterns (top-left, top-right, bottom-left)
      const inFinderTL = x < 7 && y < 7;
      const inFinderTR = x >= cells - 7 && y < 7;
      const inFinderBL = x < 7 && y >= cells - 7;
      
      if (inFinderTL || inFinderTR || inFinderBL) {
        const fx = inFinderTR ? x - (cells - 7) : x;
        const fy = inFinderBL ? y - (cells - 7) : y;
        grid[y][x] = (fx === 0 || fx === 6 || fy === 0 || fy === 6) || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4);
      } else {
        grid[y][x] = ((seed * (x + 1) * (y + 1) + x * 31 + y * 37) % 100) > 45;
      }
    }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-lg">
      <rect width={size} height={size} fill="white" rx="8" />
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect key={`${x}-${y}`} x={x * cellSize + 1} y={y * cellSize + 1} width={cellSize - 0.5} height={cellSize - 0.5} fill="#0a0a0a" rx={1} />
          ) : null
        )
      )}
    </svg>
  );
};

const TicketCard = ({ ticket }: { ticket: TicketData }) => {
  const [expanded, setExpanded] = useState(ticket.status === "upcoming");

  const statusStyles = {
    upcoming: "bg-primary/15 text-primary border-primary/30",
    used: "bg-muted text-muted-foreground border-border",
    expired: "bg-destructive/15 text-destructive border-destructive/30",
  };

  const statusLabel = {
    upcoming: "Próximo",
    used: "Usado",
    expired: "Expirado",
  };

  return (
    <div className={`rounded-3xl overflow-hidden border transition-all duration-300 ${ticket.status === "upcoming" ? "border-primary/20 bg-card" : "border-border/50 bg-card/60 opacity-75"}`}>
      {/* Ticket header with event image */}
      <div className="relative h-28 overflow-hidden">
        <img src={ticket.image} alt={ticket.eventName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 p-4 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">{ticket.eventName}</h3>
            <div className="flex items-center gap-3 text-white/70 text-sm mt-1">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{ticket.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{ticket.time}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[ticket.status]}`}>
            {statusLabel[ticket.status]}
          </span>
        </div>
      </div>

      {/* Dashed divider with notches */}
      <div className="relative flex items-center px-0">
        <div className="w-5 h-10 bg-background rounded-r-full -ml-px" />
        <div className="flex-1 border-t-2 border-dashed border-border/60" />
        <div className="w-5 h-10 bg-background rounded-l-full -mr-px" />
      </div>

      {/* Ticket details */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm">
            <span className="text-muted-foreground">Tipo: </span>
            <span className="font-semibold text-foreground">{ticket.ticketType}</span>
            {ticket.quantity > 1 && <span className="text-muted-foreground"> × {ticket.quantity}</span>}
          </div>
          <span className="text-xs text-muted-foreground font-mono">#{ticket.orderNumber}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <MapPin className="w-3.5 h-3.5" />
          {ticket.venue}
        </div>

        {/* Expandable QR */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
        >
          <QrCode className="w-4 h-4" />
          {expanded ? "Ocultar QR" : "Mostrar código QR"}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <div className="mt-4 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="p-3 bg-white rounded-2xl shadow-xl shadow-primary/5">
              <QRCodeSVG data={ticket.qrData} size={180} />
            </div>
            <p className="text-xs text-muted-foreground font-mono tracking-wider">{ticket.qrData}</p>
            <p className="text-xs text-muted-foreground text-center max-w-xs">
              Muestra este código en la entrada del evento para acceder.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TicketsPage = () => {
  const { t } = useLang();
  const upcoming = mockTickets.filter((t) => t.status === "upcoming");
  const past = mockTickets.filter((t) => t.status !== "upcoming");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-20 md:pb-0">
        <div className="px-6 lg:px-12 max-w-2xl mx-auto pt-12 pb-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Ticket className="w-6 h-6 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.myTickets}</h1>
          </div>
          <p className="text-muted-foreground mb-10">
            {t.ticketsSubtitle || "Tus entradas con código QR para acceder a los eventos."}
          </p>

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div className="mb-10">
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Próximos eventos</h2>
              <div className="flex flex-col gap-5">
                {upcoming.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </div>
          )}

          {/* Past */}
          {past.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Eventos pasados</h2>
              <div className="flex flex-col gap-4">
                {past.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </div>
          )}

          {mockTickets.length === 0 && (
            <div className="text-center py-20">
              <Ticket className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No tienes tickets aún</p>
            </div>
          )}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default TicketsPage;
