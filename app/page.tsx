'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted Since 2018' },
  { value: '60K+', label: 'Events /Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Avg .<1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL,International,T20,Big League Matches with attractive odds", icon: "🏏" },
  { title: "Football Leagues", desc: "Premier league,Champions league,League one,ISL", icon: "⚽" },
  { title: "Live Casino", desc: "Teen patti,Andar Bahar,Roulette,Poker and more live streaming", icon: "🃏" },
  { title: "Tennis Matches", desc: "Grand Slams,Ten nip Tour and WTA Tour Matches", icon: "🎾" },
  { title: "Virtual Sports", desc: "Cricket,football,racing and other sports 24×7", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI ,GPay,Paytm,PhonePe and local net banking payments with 256 bit encryption", icon: Shield },
  { title: "Fast Payouts", desc: "Withdraw directly to your bank account with 5-10 min payouts.", icon: Zap },
  { title: "Data Insights", desc: "Free data models,predictions,head to head stats and player insights", icon: TrendingUp },
  { title: "24/7 WhatsApp Support", desc: "Your Personal Relationship manager to assist you on WhatsApp", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "The withdrawal was processed within 5 minutes! I have not found a better platform.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "I got my ID today itself. Very smooth process and great executive support.", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "I had a great experience betting on IPL. The updates and payouts were very fast.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine site. I have been using it for all my betting needs.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer care. They resolved my query over whatsapp within minutes.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Sports & Gaming Experts with 15+ years of successful experience", icon: Award },
  { title: "Experience", desc: "1.2M+ registered users from 2018 with over 60M plus successful withdrawals", icon: Check },
  { title: "Authority", desc: "Top 1 online betting portal in India with awards winning excellence", icon: Shield },
  { title: "Trust", desc: "SSL encrypted with secure payment gateways and trusted by iTech labs", icon: Lock }
];

const faqs = [
  { q: "What is Mahadev Book Online Betting ID?", a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience." },
  { q: "How does Mahadev Book work?", a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account." },
  { q: "How do I register for a new Online Betting ID?", a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes." },
  { q: "What games can I play with my Mahadev Book ID?", a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos." },
  { q: "How do I deposit money into my Mahadev Book account?", a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID." },
  { q: "How do I withdraw my winnings?", a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes." },
  { q: "Is Mahadev Book legal in India?", a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations." },
  { q: "Is Mahadev Book safe and trusted?", a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker." }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="relative min-h-screen bg-[#060010] text-fuchsia-50 font-sans selection:bg-fuchsia-500/40 flex flex-col">
      {/* Brutalist Top Nav */}
      <nav className="w-full border-b-[3px] border-fuchsia-900 bg-[#060010] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter text-white uppercase">MAHADEV<span className="text-fuchsia-500 bg-fuchsia-500/10 px-2 ml-1 rounded">BOOK</span></div>
        <a href={whatsappUrl} className="bg-fuchsia-600 text-white font-bold px-6 py-2 hover:bg-fuchsia-500 transition-colors uppercase tracking-widest text-sm shadow-[4px_4px_0_0_rgba(217,70,239,0.3)]">Get ID</a>
      </nav>

      {/* Hero - Neo Brutalism & Diagonal Elements */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-fuchsia-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              BET <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-600">SMART.</span><br/> WIN BIG.
            </h1>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg border-l-4 border-fuchsia-600 pl-6 py-2">
              The one and only betting exchange with instant withdrawal and 60k + live events, where the odds are in your favor
            </p>
            <div className="flex gap-4">
              <a href={whatsappUrl} className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black px-8 py-4 uppercase tracking-widest flex items-center gap-3 shadow-[6px_6px_0_0_rgba(107,33,168,0.5)] transition-all active:translate-y-1 active:shadow-[2px_2px_0_0_rgba(107,33,168,0.5)]">
                Join Now <ArrowRight className="w-6 h-6"/>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 z-10">
            {stats.map((s, i) => (
              <div key={i} className={`border-[3px] border-fuchsia-900/50 bg-[#0c001f] p-6 shadow-[8px_8px_0_0_rgba(217,70,239,0.15)] flex justify-between items-center ${i===1?'md:translate-x-8':''}`}>
                <div>
                  <div className="font-bold text-lg uppercase tracking-wide">{s.label}</div>
                  <div className="text-zinc-500 text-sm">{s.desc}</div>
                </div>
                <div className="text-4xl font-black text-fuchsia-400">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker - Diagonal stripe */}
      <div className="bg-fuchsia-600 text-black py-4 -rotate-1 scale-110 shadow-2xl relative z-20 my-10 border-y-[3px] border-black">
        <div className="flex gap-10 whitespace-nowrap animate-ticker font-black text-lg tracking-widest uppercase">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => <span key={idx}>{item}</span>)}
        </div>
      </div>

      {/* About & Trust */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8 border-b-4 border-fuchsia-600 inline-block pb-2 uppercase tracking-wide">ABOUT MAHADEV</h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Mahadev Book is a trusted aggregator that offers you access to a world of live betting, premium sportsbook, and high roller casino with just a tap of a button. We assure you of the best payout experience with our guaranteed instant withdrawals.
            </p>
            
            <h3 className="text-2xl font-black mb-6 uppercase">Our Strength</h3>
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((tp, i) => (
                <div key={i} className="bg-[#120524] p-5 border-l-4 border-fuchsia-500">
                  <tp.icon className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <div className="font-bold mb-1 uppercase tracking-wide">{tp.title}</div>
                  <div className="text-xs text-zinc-500">{tp.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#120524] border-[3px] border-fuchsia-900/50 p-8 shadow-[12px_12px_0_0_rgba(217,70,239,0.15)]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-wide">Platform Highlights</h2>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="bg-[#060010] p-3 border border-fuchsia-500/30 text-fuchsia-400 shadow-[4px_4px_0_0_rgba(217,70,239,0.2)]"><f.icon className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 uppercase tracking-wide">{f.title}</h4>
                    <p className="text-sm text-zinc-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games List Format (Horizontal Wide Cards) */}
      <section className="py-24 bg-[#120524] px-6 border-y-[3px] border-fuchsia-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-16 text-center tracking-tighter uppercase border-b-4 border-fuchsia-600 inline-block pb-2 mx-auto block w-max">OUR MARKETS</h2>
          <div className="flex flex-col gap-6">
            {games.map((g, i) => (
              <div key={i} className="group flex flex-col md:flex-row items-center gap-6 bg-[#060010] p-6 border-[2px] border-fuchsia-900/40 hover:border-fuchsia-500 transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]">
                 <div className="w-24 h-24 bg-fuchsia-900/20 flex items-center justify-center text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                   {g.icon}
                 </div>
                 <div className="flex-grow text-center md:text-left">
                   <h3 className="text-2xl font-bold mb-2 uppercase">{g.title}</h3>
                   <p className="text-zinc-400">{g.desc}</p>
                 </div>
                 <div className="flex-shrink-0 mt-4 md:mt-0">
                   <a href={whatsappUrl} className="font-black text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-widest text-sm flex items-center gap-2">Play Now <ArrowRight className="w-4 h-4"/></a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-black mb-16 tracking-tighter border-b-4 border-fuchsia-600 inline-block pb-2 uppercase">THE WINNERS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-[#120524] border border-fuchsia-900/50 p-8 shadow-[6px_6px_0_0_rgba(217,70,239,0.1)] relative">
              <div className="absolute top-6 right-6 text-fuchsia-900 opacity-50"><MessageSquare className="w-12 h-12 fill-current"/></div>
              <div className="flex text-fuchsia-500 mb-6 relative z-10">
                {[...Array(rev.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current"/>)}
              </div>
              <p className="text-zinc-300 text-lg italic mb-6 relative z-10">"{rev.comment}"</p>
              <div className="border-t border-fuchsia-900/50 pt-4 relative z-10">
                <div className="font-bold text-white uppercase tracking-wider">{rev.name}</div>
                <div className="text-sm text-fuchsia-500 font-bold">{rev.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neo Brutalist FAQ */}
      <section className="py-24 px-6 bg-fuchsia-900/10 border-y-[3px] border-fuchsia-900/50 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center tracking-tighter">F.A.Q</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#060010] border-[2px] border-fuchsia-900/50 shadow-[4px_4px_0_0_rgba(217,70,239,0.2)]">
                <button onClick={() => setOpenFaq(openFaq===i?null:i)} className="w-full p-6 text-left flex justify-between items-center text-white font-bold text-lg hover:bg-fuchsia-900/20">
                  <span className="pr-4">{f.q}</span>
                  {openFaq === i ? <Minus className="w-6 h-6 text-fuchsia-500 flex-shrink-0"/> : <Plus className="w-6 h-6 text-fuchsia-500 flex-shrink-0"/>}
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-zinc-400 text-base leading-relaxed border-t border-fuchsia-900/50 pt-4 bg-[#0a001a]">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060010] py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="font-black text-2xl tracking-tighter text-white uppercase mb-6">MAHADEV<span className="text-fuchsia-500 bg-fuchsia-500/10 px-2 ml-1 rounded">BOOK</span></div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              India’s most trusted sports insights and fantasy analytics platform. Providing live odds, player analysis and verified betting ID since 2018.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wide mb-6 border-b-2 border-fuchsia-600 inline-block pb-1 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Insights Blog</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Mahadev Betting App</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Mahadev Book ID</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wide mb-6 border-b-2 border-fuchsia-600 inline-block pb-1 text-white">Supported Platforms</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>• Gold365 Exchange</li>
              <li>• Laser247 Official</li>
              <li>• IPL Cricket Betting ID</li>
              <li>• Online Betting ID India</li>
              <li>• Mahadev Book Online Book</li>
              <li>• Mahadev Book Official</li>
            </ul>
          </div>

          <div>
            <div className="border-[3px] border-fuchsia-900/50 bg-[#0c001f] p-6 shadow-[8px_8px_0_0_rgba(217,70,239,0.15)]">
              <h4 className="font-bold uppercase tracking-wide mb-4 text-center">Get Started</h4>
              <p className="text-xs text-zinc-400 text-center mb-6">Create your secure betting profile within 2 minutes and start betting smartly.</p>
              <a href={whatsappUrl} className="block text-center bg-[#25D366] text-white font-black px-4 py-3 uppercase tracking-widest text-sm shadow-[4px_4px_0_0_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t-[3px] border-fuchsia-900/30 pt-8 flex flex-col justify-center items-center gap-6 text-xs text-zinc-500 text-center">
          <div className="flex items-center justify-center gap-6">
            <span className="font-bold uppercase flex items-center gap-2"><Lock className="w-4 h-4 text-fuchsia-500"/> SSL Secured</span>
            <span className="border-[2px] border-zinc-700 px-3 py-1 font-bold">18+ Play Responsibly</span>
          </div>
          <p>© 2026 Mahadev Book. All rights reserved. Mahadev Book is an educational sports insights platform providing information for informational purposes only. Play all sports at your own risk.</p>
        </div>
      </footer>
    </div>
  );
}
