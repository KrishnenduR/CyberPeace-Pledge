import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Toaster, toast } from '@/components/ui/sonner';
import { Logos } from '@/components/Logos';
import { Certificate } from '@/components/Certificate';
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }).max(50),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
});
type FormData = z.infer<typeof formSchema>;
export function HomePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
    },
  });
  const handlePledgeSubmit = async (values: FormData) => {
    setIsGenerating(true);
    setSubmittedName(values.fullName);
    toast.info('Generating your certificate...', {
      description: 'Please wait a moment.',
    });
    // Allow React to re-render with the new name before capturing
    setTimeout(async () => {
      try {
        const certificateElement = document.getElementById('certificate-wrapper');
        if (!certificateElement) {
          throw new Error('Certificate element not found');
        }
        const canvas = await html2canvas(certificateElement, {
          scale: 2,
          useCORS: true,
          logging: false,
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [1000, 707],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, 1000, 707);
        pdf.save('CyberPeace_Pledge_Certificate.pdf');
        toast.success('Certificate downloaded successfully!', {
          description: 'Redirecting you to the registration page...',
        });
        window.open('https://cu.cyberpeace.global/register/individual', '_blank');
      } catch (error) {
        console.error('Error generating PDF:', error);
        toast.error('Failed to generate certificate.', {
          description: 'Please try again or contact support.',
        });
      } finally {
        setIsGenerating(false);
        form.reset();
      }
    }, 500); // A short delay to ensure the DOM is updated
  };
  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <div className="container mx-auto max-w-4xl py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16 animate-fade-in">
            <Logos />
            <h1 className="mt-8 text-3xl md:text-4xl font-bold tracking-tight text-primary dark:text-white">
              Cyber Safety Pledge
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As part of the national initiative by CyberPeace Foundation, in collaboration with Chandigarh University and supported by Google.org, I pledge to:
            </p>
          </header>
          <Card className="w-full animate-slide-up shadow-lg border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-primary dark:text-white">
                I Pledge To:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Protect Personal & Financial Information</strong> – Never share private details, financial credentials (PIN/OTP), or passwords, and always use strong, regularly updated passwords.
                </li>
                <li>
                  <strong>Practice Safe & Hygienic Digital Habits</strong> – Avoid suspicious links, unverified downloads, public/open Wi-Fi for sensitive activities, and always keep devices updated with antivirus and security patches.
                </li>
                <li>
                  <strong>Be Respectful & Responsible Online</strong> – Refrain from cyberbullying, derogatory posts, and copyright violations; promote ethical and secure digital practices everywhere.
                </li>
                <li>
                  <strong>Verify Before Sharing</strong> – Check authenticity before forwarding news/messages, and rely only on reliable and authentic digital sources.
                </li>
                <li>
                  <strong>Spread Awareness & Build Resilience</strong> – Encourage family, friends, and colleagues to follow cyber hygiene, complete training (First Responder/Myth Buster), and volunteer for CyberPeace programs to strengthen India’s cybersecurity ecosystem.
                </li>
              </ol>
            </CardContent>
          </Card>
          <section className="mt-12 md:mt-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary dark:text-white">
              Take the Pledge
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handlePledgeSubmit)} className="space-y-6 max-w-lg mx-auto">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Jane Doe" {...field} className="text-lg p-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g., jane.doe@example.com" {...field} className="text-lg p-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Mobile Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g., 9876543210" {...field} className="text-lg p-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full text-lg py-7 bg-primary hover:bg-primary/90 text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
                >
                  {isGenerating ? (
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  ) : (
                    <Download className="mr-2 h-6 w-6" />
                  )}
                  {isGenerating ? 'Generating Certificate...' : 'Pledge and Download Certificate'}
                </Button>
              </form>
            </Form>
          </section>
          <footer className="text-center mt-16 text-gray-500 dark:text-gray-400">
            <p>Built with ❤️ at Cloudflare</p>
          </footer>
        </div>
      </main>
      <Toaster richColors closeButton />
      {/* Off-screen certificate for rendering */}
      <div style={{ position: 'fixed', left: '-2000px', top: 0, zIndex: -1 }}>
        <div id="certificate-wrapper">
          <Certificate name={submittedName} />
        </div>
      </div>
    </>
  );
}