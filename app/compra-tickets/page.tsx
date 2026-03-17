"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompraTicketsPage() {
  // Countdown Timer State
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

  // VALIDACIÓN POR CAMPO (tiempo real)
  const validateField = (name: string, value: string) => {
    let message = "";

    if (name === "dni") {
      if (value.length > 0 && value.length < 8) {
        message = "El DNI debe tener 8 dígitos";
      }
    }

    if (name === "nombres") {
      if (value.trim().length < 3) {
        message = "Ingresa tus nombres";
      }
    }

    if (name === "apellidos") {
      if (value.trim().length < 3) {
        message = "Ingresa tus apellidos";
      }
    }

    if (name === "whatsapp") {
      if (value.length > 0 && value.length < 9) {
        message = "El número debe tener 9 dígitos";
      }
    }

    if (name === "departamento") {
      if (!value) {
        message = "Selecciona un departamento";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  // MANEJO DE INPUTS
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;

    const checked = (e.currentTarget as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;

    // SOLO NÚMEROS
    if (name === "dni" || name === "whatsapp") {
      if (!/^\d*$/.test(value)) return;
    }

    // SOLO LETRAS
    if (name === "nombres" || name === "apellidos") {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value)) return;
    }

    // límites
    if (name === "dni" && value.length > 8) return;
    if (name === "whatsapp" && value.length > 9) return;

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    validateField(name, String(newValue));
  };

  // VALIDACIÓN GENERAL (submit)
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (form.dni.length !== 8) {
      newErrors.dni = "El DNI debe tener 8 dígitos";
    }

    if (form.nombres.trim().length < 3) {
      newErrors.nombres = "Ingresa tus nombres";
    }

    if (!form.terminos) {
      newErrors.terminos = "Debes aceptar los términos y condiciones";
    }

    if (form.apellidos.trim().length < 3) {
      newErrors.apellidos = "Ingresa tus apellidos";
    }

    if (form.whatsapp.length !== 9) {
      newErrors.whatsapp = "El número debe tener 9 dígitos";
    }

    if (!form.departamento) {
      newErrors.departamento = "Selecciona un departamento";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    // simulación de llamada a API
    setTimeout(() => {
      setIsLoading(false);

      // simulamos error
      alert("Error al registrar. Intenta nuevamente.");
    }, 2000);
  };

  // COUNTDOWN
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#061108] text-slate-100 min-h-screen font-display selection:bg-[#4ADE80]/30">
      <div className="relative flex flex-col w-full overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full glass-panel border-b border-primary/20 px-4 md:px-10 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority={true}
              />
              <Link
                href="/"
                className="text-xl font-bold tracking-tight hidden sm:block"
              >
                Agarra Tu Gringa
              </Link>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/consulta-tickets">
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <span className="material-symbols-outlined">
                    confirmation_number
                  </span>
                  <span className="text-xs font-bold uppercase hidden md:block">
                    Mis Tickets
                  </span>
                </button>
              </Link>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <span className="material-symbols-outlined">emoji_events</span>
                <span className="text-xs font-bold uppercase hidden md:block">
                  Ganadores
                </span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10 mx-auto px-4 py-8">
          {/* Hero & Countdown */}

          {/* Main Registration Form */}
          <section className="glass-panel rounded-3xl max-w-2xl mx-auto p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8 text-center">
                <h3 className="text-xl md:text-3xl font-black text-slate-100 mb-2">
                  ¡REGÍSTRATE AQUÍ!
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  Completa tus datos para participar en el sorteo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                {/* DNI */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    DNI
                  </label>

                  <input
                    name="dni"
                    value={form.dni}
                    onChange={handleChange}
                    maxLength={8}
                    placeholder="Ingresa tu documento de identidad"
                    className="w-full bg-white border border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  />

                  {errors.dni && (
                    <p className="text-red-400 text-sm mt-1">{errors.dni}</p>
                  )}
                </div>

                {/* Nombres */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Nombres
                  </label>

                  <input
                    name="nombres"
                    value={form.nombres}
                    onChange={handleChange}
                    placeholder="Tus nombres completos"
                    className="w-full bg-white border border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  />

                  {errors.nombres && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.nombres}
                    </p>
                  )}
                </div>

                {/* Apellidos */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Apellidos
                  </label>

                  <input
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    placeholder="Tus apellidos"
                    className="w-full bg-white border border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  />

                  {errors.apellidos && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.apellidos}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Número de WhatsApp
                  </label>

                  <div className="flex">
                    <input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      maxLength={9}
                      placeholder="987654321"
                      type="tel"
                      className="w-full bg-white border border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  {errors.whatsapp && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Departamento */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Departamento
                  </label>

                  <select
                    name="departamento"
                    value={form.departamento}
                    onChange={handleChange}
                    className="w-full bg-white border border-
                    slate-700/50 rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="">Selecciona tu ubicación</option>
                    <option>Lima</option>
                    <option>Arequipa</option>
                    <option>Cusco</option>
                    <option>Trujillo</option>
                  </select>

                  {errors.departamento && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.departamento}
                    </p>
                  )}
                </div>

                <div className="col-span-1 md:col-span-2">
                  {/* Contenedor Principal de Términos y Condiciones */}
                  <div
                    className={`p-5 rounded-2xl transition-all duration-300 border border-slate-700/50 ${
                      form.terminos
                        ? "bg-primary/60" // Color verde cuando está seleccionado (con opacidad para estilo "glass")
                        : "bg-red-500/80" // Color rojo cuando no está seleccionado (con opacidad para estilo "glass")
                    }`}
                  >
                    {/* Label para hacer clic en el texto o el input */}
                    <label className="flex items-center gap-3 cursor-pointer">
                      {/* Input Checkbox estilizado */}
                      <input
                        type="checkbox"
                        name="terminos"
                        checked={form.terminos}
                        onChange={handleChange}
                        className="w-5 h-5 text-green-600 bg-white/20 border-white/30 rounded focus:ring-2 focus:ring-green-400 focus:ring-offset-2 outline-none"
                      />

                      {/* Texto estilizado para alto contraste */}
                      <span className="text-xs md:text-base text-white font-bold">
                        Acepto los términos y condiciones
                      </span>
                    </label>
                  </div>

                  {/* Mensaje de error, si existe */}
                  {errors.terminos && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.terminos}
                    </p>
                  )}
                </div>

                {/* Botón */}
                <div className="col-span-1 md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 px-10 bg-black hover:bg-black/90 font-black text-xl rounded-xl transition-all transform hover:scale-[1.01] shadow-xl from-black to-black/90 text-white shadow-black/40 active:scale-95 disabled:opacity-70"
                  >
                    {isLoading ? "VALIDANDO..." : "SUBIR COMPROBANTE"}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="glass-panel rounded-3xl max-w-2xl mx-auto p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decoración de fondo para simular el color de la imagen */}
            <div className="absolute inset-0 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Botón Superior Informativo */}
              <div className="bg-primary/90 text-white p-4 rounded-lg text-center px-6 py-2 font-bold text-sm md:text-base mb-2 shadow-lg animate-pulse">
                ¡Si aún no has realizado tu pago hazlo ahora!
              </div>

              {/* Flecha indicadora */}
              <div className="text-primary mb-2">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* Precio */}
              <div className="mb-4">
                <p className="text-primary font-black text-sm uppercase tracking-widest">
                  Costo de Ticket
                </p>
                <h2 className="text-6xl md:text-7xl font-black text-white drop-shadow-md">
                  S/40
                </h2>
              </div>

              {/* Métodos de Pago */}
              <div className="w-full space-y-2 max-w-sm">
                {/* Sección YAPE */}
                <div className="flex flex-col items-center">
                  <div className="bg-purple-800 text-white font-black px-8 py-1 rounded-full text-xl mb-4 shadow-lg">
                    YAPE
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-xl mb-3">
                    {/* Reemplaza con tu QR real */}
                    <div className="w-48 h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                      {/* [QR YAPE] */}
                      <Image
                        src="https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png"
                        alt="Código QR"
                        width={250} // ancho deseado
                        height={250} // alto deseado
                        priority={true} // opcional: carga inmediata para LCP
                      />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm">
                    Agarra tu gringa
                  </p>
                  {/* <p className="text-primary font-black text-lg"># 999 x99 x99</p> */}
                </div>

                {/* Sección PLIN */}
                <div className="flex flex-col items-center">
                  <div className="bg-sky-500 text-white font-black px-8 py-1 rounded-full text-xl mb-4 shadow-lg">
                    PLIN
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-xl mb-3">
                    {/* Reemplaza con tu QR real */}
                    <div className="w-48 h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                      {/* [QR PLIN] */}
                      <Image
                        src="https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png"
                        alt="Código QR"
                        width={250} // ancho deseado
                        height={250} // alto deseado
                        priority={true} // opcional: carga inmediata para LCP
                      />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm">
                    Agarra tu gringa
                  </p>
                  {/* <p className="text-slate-300 font-bold text-xs mt-1">(SOLO CON QR)</p> */}
                </div>
              </div>
              {/* Recordatorio final */}
              <div className="mt-2 mb-0 p-4 border-t border-white/10 w-full">
                <p className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
                  Recuerda tomar captura a tu pago para poder registrarte en el
                  formulario
                </p>
              </div>
            </div>
          </section>
        </main>
        {/* Sorteo */}
        <div>
          <div className="text-center md:flex md:justify-center md:gap-2 px-2">
            <p className="text-slate-400 text-sm md:text-lg">
              El gran sorteo se realizará el{" "}
              <span className="text-xs md:text-base text-slate-100 font-bold underline decoration-primary">
                viernes 27 de Marzo.
              </span>
            </p>

            <p className="text-slate-400 text-sm md:text-lg">
              ¡No te quedes fuera!
            </p>
          </div>
          {/* Countdown UI */}
          <div className="flex justify-center gap-3 md:gap-6 py-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-primary-dark/40 border border-primary/30 text-2xl md:text-3xl font-black text-primary">
                {format(timeLeft.days)}
              </div>
              <span className="text-xs uppercase mt-2 font-medium text-slate-500">
                Días
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-primary-dark/40 border border-primary/30 text-2xl md:text-3xl font-black text-primary">
                {format(timeLeft.hours)}
              </div>
              <span className="text-xs uppercase mt-2 font-medium text-slate-500">
                Horas
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-primary-dark/40 border border-primary/30 text-2xl md:text-3xl font-black text-primary">
                {format(timeLeft.minutes)}
              </div>
              <span className="text-xs uppercase mt-2 font-medium text-slate-500">
                Min
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-primary-dark/40 border border-primary/30 text-2xl md:text-3xl font-black text-primary">
                {format(timeLeft.seconds)}
              </div>
              <span className="text-xs uppercase mt-2 font-medium text-slate-500">
                Seg
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="glass-panel rounded-3xl p-8 border-t-4 border-t-primary shadow-2xl shadow-primary/10">
        <div className="text-center text-slate-300 text-xs">
          © 2026 Agarra Tu Gringa - Todos los derechos reservados. El sorteo es
          regulado por las leyes locales vigentes.
        </div>
      </footer>
    </div>
  );
}
