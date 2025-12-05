// src/components/RegistrationForm.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, Briefcase } from "lucide-react";

const services = [
  "Web Development",
  "Social Media Management",
  "AI Automation",
  "Google Ads & Meta Ads",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  service: z.array(z.string()).min(1, "Please select at least one service"),
  businessCategory: z.string().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to continue"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<FormData>>({
    name: "",
    email: "",
    phone: "",
    service: [],
    businessCategory: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // refs for mobile scrolling behavior
  const containerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // input refs
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const notesRef = useRef<HTMLTextAreaElement | null>(null);

  const validateField = (field: keyof FormData, value: unknown) => {
    try {
      // zod's shape typing; access the schema for the specific field
      // @ts-ignore - tactical access to shape
      const fieldSchema = (formSchema as any).shape[field];
      fieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
      const validatedData = formSchema.parse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service ?? [],
        businessCategory: formData.businessCategory,
        consent: formData.consent,
      });

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        setApiError(result?.message || "Something went wrong. Try again.");
        toast({
          title: "Submission Failed",
          description: result?.message || "Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });

      navigate("/thank-you", {
        state: { name: validatedData.name, service: validatedData.service },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormData;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);

        toast({
          title: "Please check the form",
          description: "Some fields require your attention.",
          variant: "destructive",
        });

        const firstErrorField = error.errors[0]?.path?.[0];
        if (firstErrorField === "name") nameRef.current?.focus();
        else if (firstErrorField === "email") emailRef.current?.focus();
        else if (firstErrorField === "phone") phoneRef.current?.focus();
      } else {
        setApiError("Unexpected error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Robust toggleService: accepts optional `force` boolean to explicitly set/unset.
  const toggleService = (serviceName: string, force?: boolean) => {
    const current = (formData.service as string[]) ?? [];
    const includes = current.includes(serviceName);

    let next: string[];
    if (typeof force === "boolean") {
      next = force ? (includes ? current : [...current, serviceName]) : current.filter((s) => s !== serviceName);
    } else {
      next = includes ? current.filter((s) => s !== serviceName) : [...current, serviceName];
    }

    setFormData({ ...formData, service: next });
    validateField("service", next);
  };

  // When an input receives focus, scroll it into view (helps on mobile with keyboard)
  const handleFocusScroll = (el: HTMLElement | null) => {
    if (!el || typeof window === "undefined") return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 220);
  };

  // small enhancement: prevent page bounce on horizontal pan for child elements
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (ev: TouchEvent) => {
      // allow default touch — left here intentionally for passive behavior
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    return () => el.removeEventListener("touchstart", onTouchStart);
  }, []);

  return (
    <section id="contact" className="py-16 relative text-sm md:text-base">
      {/* decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto md:max-w-2xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-background" />
            </div>

            <div className="relative">
              <div className="bg-gradient-to-b from-card to-background p-6 pb-4 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-lg md:text-3xl font-bold text-foreground mb-2"
                >
                  Get Your Free Consultation
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-sm md:text-base"
                >
                  Transform your business with our expert digital solutions
                </motion.p>
              </div>

              {/* Container: mobile/tablet will have both horizontal+vertical scrolling enabled,
                  desktop (md+) will keep default behavior (no change) */}
              <div
                className="
                  bg-card/50 backdrop-blur-sm p-6 md:p-8
                  overflow-x-auto overflow-y-auto touch-pan-x touch-pan-y
                  overscroll-x-contain overscroll-y-contain
                  md:overflow-visible md:overflow-x-visible md:overflow-y-visible md:touch-none
                "
                ref={containerRef}
              >
                {/* Form: mobile/tablet scrollable both directions; desktop unaffected */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5 max-h-[70vh] md:max-h-none overflow-y-auto overflow-x-auto touch-pan-x touch-pan-y md:overflow-visible md:touch-none px-0"
                  ref={formRef}
                >
                  {/* Name */}
                  <div className="relative min-w-[260px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="w-5 h-5" />
                    </div>
                    <Input
                      ref={nameRef}
                      placeholder="Enter name"
                      value={formData.name}
                      onFocus={() => handleFocusScroll(nameRef.current)}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        validateField("name", e.target.value);
                      }}
                      className="pl-12 bg-background/80 border-border/60 focus:border-primary py-3 text-base min-w-[260px]"
                      aria-label="Full name"
                      inputMode="text"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative min-w-[260px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Input
                      ref={emailRef}
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onFocus={() => handleFocusScroll(emailRef.current)}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        validateField("email", e.target.value);
                      }}
                      className="pl-12 bg-background/80 border-border/60 focus:border-primary py-3 text-base min-w-[260px]"
                      aria-label="Email address"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 min-w-[320px]">
                    <div className="w-24 flex-shrink-0">
                      <Select defaultValue="+91">
                        <SelectTrigger className="bg-background/80 border-border/60 py-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">+91</SelectItem>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex-1 relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Phone className="w-5 h-5" />
                      </div>
                      <Input
                        ref={phoneRef}
                        type="tel"
                        placeholder="Mobile no."
                        value={formData.phone}
                        onFocus={() => handleFocusScroll(phoneRef.current)}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          validateField("phone", e.target.value);
                        }}
                        className="pl-12 bg-background/80 border-border/60 focus:border-primary py-3 text-base min-w-[200px]"
                        aria-label="Phone number"
                        inputMode="tel"
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-destructive text-sm -mt-2">{errors.phone}</p>
                  )}

                  {/* Services (MULTI-SELECT via checkboxes) */}
                  <div className="relative min-w-[260px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div className="pl-12">
                      <p className="text-sm mb-2 text-muted-foreground">Select Service(s) of Interest *</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {services.map((svc) => {
                          const checked = ((formData.service as string[]) ?? []).includes(svc);
                          return (
                            <div
                              key={svc}
                              className="flex items-center gap-3 cursor-pointer select-none rounded-md p-3 hover:bg-background/60 min-w-[200px]"
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  toggleService(svc);
                                }
                              }}
                              // NOTE: no onClick here — Checkbox handles the toggle to avoid double toggle
                            >
                              <Checkbox
                                checked={checked}
                                onCheckedChange={(val) => toggleService(svc, Boolean(val))}
                              />
                              <span className="text-sm">{svc}</span>
                            </div>
                          );
                        })}
                      </div>
                      {errors.service && (
                        <p className="text-destructive text-sm mt-1">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Business Category (optional notes) */}
                  <div className="relative min-w-[260px]">
                    <label className="text-sm text-muted-foreground mb-2 block">Business Category / Notes (optional)</label>
                    <textarea
                      ref={notesRef}
                      placeholder="Describe your business or add any notes (optional)"
                      value={formData.businessCategory}
                      onFocus={() => handleFocusScroll(notesRef.current)}
                      onChange={(e) => {
                        setFormData({ ...formData, businessCategory: e.target.value });
                        validateField("businessCategory", e.target.value);
                      }}
                      className="w-full min-h-[120px] resize-none p-3 rounded-md bg-background/80 border border-border/60 focus:border-primary text-sm min-w-[260px]"
                      aria-label="Business category or notes"
                    />
                    {errors.businessCategory && (
                      <p className="text-destructive text-sm mt-1">{errors.businessCategory}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3 min-w-[260px]">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => {
                        setFormData({ ...formData, consent: checked as boolean });
                        validateField("consent", checked);
                      }}
                      className="mt-1 border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      aria-describedby="consent-desc"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive information regarding my submitted application and updates from Avani Enterprises *
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-destructive text-sm -mt-3">{errors.consent}</p>
                  )}

                  {/* API ERROR INLINE */}
                  {apiError && (
                    <p className="text-destructive text-sm text-center mt-2">{apiError}</p>
                  )}

                  {/* spacer for mobile so fixed button doesn't cover content */}
                  <div className="h-[88px] md:hidden" aria-hidden="true" />
                </form>

                {/* Sticky submit bar for mobile (and centered on desktop as before) */}
                <div
                  className="fixed bottom-0 left-0 right-0 md:static md:inset-auto md:flex md:justify-center"
                  aria-hidden={false}
                >
                  <div
                    className="w-full md:w-auto max-w-3xl mx-auto md:mx-0 p-4 md:p-0 bg-gradient-to-t from-card/80 to-transparent backdrop-blur-sm shadow-lg md:shadow-none md:bg-transparent md:backdrop-blur-0"
                    style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
                  >
                    {/* CENTERED BUTTON */}
                    <div className="flex items-center justify-center">
                      <div className="w-full md:w-auto">
                        <Button
                          type="button"
                          variant="hero"
                          size="lg"
                          className="w-full md:w-[300px]"
                          onClick={() => {
                            // manually submit the form
                            formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
                          }}
                          disabled={isLoading}
                          aria-label="Submit registration form"
                        >
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 justify-center">
                              Submit
                              <Send className="w-5 h-5" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
