import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!agreed) {
      toast({ title: "Please agree to the privacy policy", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setAgreed(false);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-3">
            Contact Us
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            <span className="font-bold text-foreground">Kiddogo</span> is looking for travel, parenting and development partners. Please get in touch!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                  First Name <span className="text-destructive">*</span>
                </label>
                <Input value={form.firstName} onChange={update("firstName")} maxLength={100} className="bg-card border-border" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <Input value={form.lastName} onChange={update("lastName")} maxLength={100} className="bg-card border-border" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                  Company
                </label>
                <Input value={form.phone} onChange={update("phone")} maxLength={100} className="bg-card border-border" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input type="email" value={form.email} onChange={update("email")} maxLength={255} className="bg-card border-border" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                  Phone Number
                </label>
                <Input type="tel" value={form.phone} onChange={update("phone")} maxLength={20} className="bg-card border-border" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 block">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea value={form.message} onChange={update("message")} maxLength={1000} rows={5} className="bg-card border-border resize-y" />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="privacy" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
              <label htmlFor="privacy" className="text-sm text-foreground cursor-pointer">
                You agree to the <a href="#" className="font-semibold underline hover:text-primary">Privacy Policy</a>
              </label>
            </div>

            <Button type="submit" size="lg" className="rounded-full px-8 font-bold">
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
