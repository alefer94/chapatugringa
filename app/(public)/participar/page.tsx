"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Phone,
  CreditCard,
  MapPin,
  Ticket,
  ShieldCheck,
  CheckCircle2,
  Upload,
  Clock,
  QrCode,
} from "lucide-react";

export default function CompraTicketsPage() {
  const format = (n: number) => String(n).padStart(2, "0");
  const [isLoading, setIsLoading] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  const [form, setForm] = useState({
    dni: "",
    nombres: "",
    apellidos: "",
    whatsapp: "",
    terminos: false,
    departamento: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let message = "";
    if (name === "dni" && value.length > 0 && value.length < 8)
      message = "El DNI debe tener 8 dígitos";
    if (name === "nombres" && value.trim().length < 3)
      message = "Ingresa tus nombres";
    if (name === "apellidos" && value.trim().length < 3)
      message = "Ingresa tus apellidos";
    if (name === "whatsapp" && value.length > 0 && value.length < 9)
      message = "El número debe tener 9 dígitos";
    if (name === "departamento" && !value)
      message = "Selecciona un departamento";
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;
    const checked = (e.currentTarget as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;
    if ((name === "dni" || name === "whatsapp") && !/^\d*$/.test(value)) return;
    if (
      (name === "nombres" || name === "apellidos") &&
      !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value)
    )
      return;
    if (name === "dni" && value.length > 8) return;
    if (name === "whatsapp" && value.length > 9) return;
    setForm((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, String(newValue));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (form.dni.length !== 8) newErrors.dni = "El DNI debe tener 8 dígitos";
    if (form.nombres.trim().length < 3) newErrors.nombres = "Ingresa tus nombres";
    if (form.apellidos.trim().length < 3) newErrors.apellidos = "Ingresa tus apellidos";
    if (form.whatsapp.length !== 9) newErrors.whatsapp = "El número debe tener 9 dígitos";
    if (!form.departamento) newErrors.departamento = "Selecciona un departamento";
    if (!form.terminos) newErrors.terminos = "Debes aceptar los términos y condiciones";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Error al registrar. Intenta nuevamente.");
    }, 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Input shared classes
  const inputBase =
    "w-full bg-background border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm";
  const inputOk = "border-border focus:border-primary";
  const inputErr = "border-destructive ring-1 ring-destructive";

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* ── Hero: título + countdown ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-card/60 to-card/30 border border-border rounded-3xl p-6 md:p-8">

          {/* Título */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="bg-primary/20 border border-primary/30 p-4 rounded-2xl shadow-[0_0_24px_oklch(44%_0.14_165/0.35)] inline-block">
              <Ticket className="w-8 h-8 text-secondary drop-shadow-[0_0_8px_oklch(90%_0.22_102/0.8)]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              ¡Regístrate y Participa!
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-sm">
              Completa tus datos, realiza tu pago y sube tu comprobante para participar en el Gran Sorteo.
            </p>
          </div>

          {/* Divisor visible solo en desktop */}
          <div className="hidden md:block w-px self-stretch bg-border" />

          {/* Countdown */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Sorteo el{" "}
                <span className="text-foreground font-bold underline decoration-secondary">
                  domingo 31 de mayo
                </span>
              </span>
            </div>
            <div className="flex gap-3">
              {[
                { value: timeLeft.days, label: "Días" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Seg" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-background border border-secondary/30 text-2xl md:text-3xl font-black text-secondary shadow-[0_0_16px_oklch(90%_0.22_102/0.2)] tabular-nums">
                    {format(value)}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* ══════════════════════════════════════
              LEFT — Registration Form
          ══════════════════════════════════════ */}
          <section className="bg-gradient-to-b from-card to-card/80 border border-border rounded-3xl p-6 md:p-8 shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-1">
              <div className="bg-primary/20 p-2.5 rounded-xl border border-primary/20">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-white font-black text-lg leading-tight">Tus datos</h2>
                <p className="text-muted-foreground text-xs">Todos los campos son obligatorios</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

              {/* DNI */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" /> DNI *
                </label>
                <input
                  name="dni"
                  value={form.dni}
                  onChange={handleChange}
                  maxLength={8}
                  inputMode="numeric"
                  placeholder="12345678"
                  className={`${inputBase} ${errors.dni ? inputErr : inputOk}`}
                />
                {errors.dni && <p className="text-destructive text-xs">{errors.dni}</p>}
              </div>

              {/* Nombres */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Nombres *
                </label>
                <input
                  name="nombres"
                  value={form.nombres}
                  onChange={handleChange}
                  placeholder="Tus nombres completos"
                  className={`${inputBase} ${errors.nombres ? inputErr : inputOk}`}
                />
                {errors.nombres && <p className="text-destructive text-xs">{errors.nombres}</p>}
              </div>

              {/* Apellidos */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Apellidos *
                </label>
                <input
                  name="apellidos"
                  value={form.apellidos}
                  onChange={handleChange}
                  placeholder="Tus apellidos"
                  className={`${inputBase} ${errors.apellidos ? inputErr : inputOk}`}
                />
                {errors.apellidos && <p className="text-destructive text-xs">{errors.apellidos}</p>}
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Número de WhatsApp *
                </label>
                <input
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  maxLength={9}
                  inputMode="numeric"
                  type="tel"
                  placeholder="987654321"
                  className={`${inputBase} ${errors.whatsapp ? inputErr : inputOk}`}
                />
                {errors.whatsapp && <p className="text-destructive text-xs">{errors.whatsapp}</p>}
              </div>

              {/* Departamento */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Departamento *
                </label>
                <select
                  name="departamento"
                  value={form.departamento}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.departamento ? inputErr : inputOk} cursor-pointer`}
                >
                  <option value="">Selecciona tu ubicación</option>
                  <option>Lima</option>
                  <option>Arequipa</option>
                  <option>Cusco</option>
                  <option>Trujillo</option>
                  <option>Piura</option>
                  <option>Chiclayo</option>
                  <option>Iquitos</option>
                  <option>Otra ciudad</option>
                </select>
                {errors.departamento && <p className="text-destructive text-xs">{errors.departamento}</p>}
              </div>

              {/* Términos */}
              <div
                className={`p-4 rounded-2xl border transition-all duration-300 ${form.terminos
                  ? "bg-primary/25 border-primary/40 shadow-[0_0_12px_oklch(58%_0.20_160/0.2)]"
                  : errors.terminos
                    ? "bg-destructive/15 border-destructive/50"
                    : "bg-muted border-border"
                  }`}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terminos"
                    checked={form.terminos}
                    onChange={handleChange}
                    className="w-5 h-5 rounded accent-primary"
                  />
                  <span className="text-sm text-foreground font-medium">
                    Acepto los{" "}
                    <Link href="#" className="text-secondary font-bold underline underline-offset-2 hover:text-accent transition-colors">
                      términos y condiciones
                    </Link>
                  </span>
                </label>
              </div>
              {errors.terminos && <p className="text-destructive text-xs -mt-3">{errors.terminos}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-right text-secondary-foreground font-black py-4 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-wider text-sm shadow-[0_0_24px_oklch(90%_0.22_102/0.35)] hover:shadow-[0_0_40px_oklch(90%_0.22_102/0.6)] transition-all duration-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-secondary-foreground/40 border-t-secondary-foreground rounded-full animate-spin" />
                    Validando...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Subir Comprobante
                  </>
                )}
              </button>

            </form>
          </section>

          {/* ══════════════════════════════════════
              RIGHT — Payment Panel
          ══════════════════════════════════════ */}
          <section className="bg-gradient-to-b from-card to-card/80 border border-border rounded-3xl p-6 md:p-8 shadow-xl flex flex-col items-center gap-6">

            {/* Attention banner */}
            <div className="w-full bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border border-secondary/40 text-secondary font-black text-sm text-center px-4 py-3 rounded-2xl animate-pulse shadow-[0_0_16px_oklch(90%_0.22_102/0.25)]">
              ¡Si aún no has realizado tu pago, hazlo ahora!
            </div>

            {/* Arrow */}
            <svg className="w-8 h-8 text-secondary -my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>

            {/* Price */}
            <div className="text-center">
              <p className="text-secondary font-black text-xs uppercase tracking-widest mb-1">Costo por Ticket</p>
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-2xl bg-secondary/20 blur-xl scale-110 pointer-events-none" />
                <h2 className="relative text-7xl md:text-8xl font-black text-white drop-shadow-[0_0_24px_oklch(90%_0.22_102/0.5)]">
                  S/10
                </h2>
              </div>
            </div>

            {/* QR */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                <QrCode className="w-4 h-4 text-primary" />
                Escanea para pagar
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-[0_0_30px_oklch(90%_0.22_102/0.25)] border-2 border-secondary/30">
                <div className="w-44 h-44 rounded-lg overflow-hidden">
                  <Image
                    src="/qr-pagos.png"
                    alt="Código QR de pago"
                    width={250}
                    height={250}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-foreground font-bold text-sm text-center">
                Razón social: <span className="text-secondary">TU GRINGA AB S.A.C</span>
              </p>
            </div>

            {/* Reminder */}
            <div className="w-full bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recuerda{" "}
                <span className="text-foreground font-bold">tomar captura a tu pago</span>{" "}
                para poder registrarte en el formulario y enviar tu comprobante.
              </p>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Proceso 100% seguro y verificado</span>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}