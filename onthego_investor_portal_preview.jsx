import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, MapPin, Globe, Leaf, Rocket, Shield, Cpu, DollarSign, MessageCircle } from "lucide-react";

export default function OnTheGoMobilityPortal(){

const [section,setSection]=useState("hero");

const Nav = () => (
<div className="flex flex-wrap items-center justify-between px-6 py-4 bg-black/80 backdrop-blur text-white sticky top-0 z-20">
<div className="text-xl font-bold">OnTheGo</div>
<div className="flex flex-wrap gap-3 text-sm">
<Button variant="ghost" className="text-white" onClick={()=>setSection('hero')}>Vision</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('product')}>Product</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('screens')}>App</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('technology')}>Technology</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('business')}>Business</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('impact')}>Impact</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('roadmap')}>Roadmap</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('team')}>Team</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('faq')}>FAQ</Button>
<Button variant="ghost" className="text-white" onClick={()=>setSection('investment')}>Invest</Button>
</div>
</div>
)

const Hero = () => (
<div className="relative text-center py-40 px-6 text-white bg-gradient-to-br from-black via-indigo-900 to-purple-900 overflow-hidden">
<div className="max-w-4xl mx-auto space-y-6">
<h1 className="text-6xl font-bold leading-tight">A Real‑Time Mobility Network</h1>
<p className="text-xl opacity-90">Transform empty car seats into a dynamic mobility network. OnTheGo enables drivers already on the road to share seats instantly with travelers heading the same direction.</p>
<div className="flex justify-center gap-4 pt-6">
<Button size="lg" onClick={()=>setSection('product')}>Explore Product</Button>
<Button size="lg" variant="outline" onClick={()=>setSection('investment')}>Investor Deck</Button>
</div>
</div>
</div>
)

const Product = () => (
<div className="p-20 bg-gray-950 text-gray-100">
<h2 className="text-4xl font-bold text-center mb-12">Product Innovation</h2>
<p className="text-center max-w-3xl mx-auto text-gray-300 mb-16">
OnTheGo transforms everyday vehicles into a real‑time mobility network. Drivers already on the road share available seats while passengers heading in the same direction join instantly. The platform blends navigation, community, and AI matching to create a dynamic transportation layer.
</p>

<div className="grid md:grid-cols-3 gap-10">
<Card className="bg-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl transition">
<CardContent className="p-8 space-y-4">
<Car size={32} className="text-indigo-400"/>
<h3 className="text-xl font-semibold">Live Drive Mode</h3>
<p className="text-gray-300">Drivers activate drive mode and broadcast seat availability while travelling. The system continuously updates their route and ETA.</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl transition">
<CardContent className="p-8 space-y-4">
<MapPin size={32} className="text-purple-400"/>
<h3 className="text-xl font-semibold">Instant Route Matching</h3>
<p className="text-gray-300">AI analyzes routes, traffic and proximity to match passengers travelling in the same direction within seconds.</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl transition">
<CardContent className="p-8 space-y-4">
<Users size={32} className="text-blue-400"/>
<h3 className="text-xl font-semibold">Travel Communities</h3>
<p className="text-gray-300">Create trusted commuting circles, holiday travel groups and local ride communities.</p>
</CardContent>
</Card>
</div>
</div>
)

const Screens = () => (
<div className="grid md:grid-cols-2 gap-12 p-16 bg-gradient-to-b from-white to-gray-100">

<Card className="shadow-xl rounded-3xl">
<CardContent className="p-10 space-y-4">
<h3 className="text-xl font-bold">Driver Mode</h3>
<p>Destination: Delhi</p>
<p>Seats Available: 3</p>
<p>Status: Driving</p>
<Button>Activate Drive Mode</Button>
</CardContent>
</Card>

<Card className="shadow-xl rounded-3xl">
<CardContent className="p-10 space-y-4">
<h3 className="text-xl font-bold">Passenger Discovery</h3>
<p>Nearby Driver: Raj</p>
<p>Route: Hisar → Delhi</p>
<p>Pickup ETA: 4 minutes</p>
<Button>Request Pickup</Button>
</CardContent>
</Card>

<Card className="shadow-xl rounded-3xl">
<CardContent className="p-10 space-y-4">
<h3 className="text-xl font-bold">Ride Request</h3>
<p>Select pickup point and drop destination.</p>
<Button>Send Request</Button>
</CardContent>
</Card>

<Card className="shadow-xl rounded-3xl">
<CardContent className="p-10 space-y-4">
<h3 className="text-xl font-bold">Ride Tracking</h3>
<p>Track driver arrival and live route.</p>
<Button>Track Ride</Button>
</CardContent>
</Card>

</div>
)

const Technology = () => (
<div className="p-20 bg-black text-gray-100">
<h2 className="text-4xl font-bold mb-6 text-center">Technology Architecture</h2>
<p className="text-center max-w-3xl mx-auto text-gray-300 mb-16">
The platform is built as a real‑time mobility infrastructure combining location intelligence, AI matching algorithms and scalable cloud services. The architecture ensures low latency ride discovery, reliable route tracking and secure user interactions.
</p>

<div className="grid md:grid-cols-4 gap-10">

<Card className="bg-gray-900 border border-gray-800">
<CardContent className="p-6 space-y-3">
<Cpu className="text-indigo-400"/>
<h3 className="font-semibold">Realtime Engine</h3>
<p className="text-gray-300">Continuously processes driver location updates and ride requests to match passengers instantly.</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border border-gray-800">
<CardContent className="p-6 space-y-3">
<Globe className="text-blue-400"/>
<h3 className="font-semibold">Maps Integration</h3>
<p className="text-gray-300">Advanced routing, ETA calculations and navigation intelligence powered by mapping APIs.</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border border-gray-800">
<CardContent className="p-6 space-y-3">
<Shield className="text-green-400"/>
<h3 className="font-semibold">Safety Systems</h3>
<p className="text-gray-300">Identity verification, ride monitoring and trust scores ensure a safe mobility network.</p>
</CardContent>
</Card>

<Card className="bg-gray-900 border border-gray-800">
<CardContent className="p-6 space-y-3">
<MessageCircle className="text-purple-400"/>
<h3 className="font-semibold">Communication</h3>
<p className="text-gray-300">Voice messaging and real‑time coordination between drivers and passengers.</p>
</CardContent>
</Card>

</div>
</div>
)

const Business = () => (
<div className="p-16 bg-white">
<h2 className="text-4xl font-bold mb-10">Business Model</h2>
<div className="grid md:grid-cols-3 gap-8">

<Card className="shadow-lg">
<CardContent className="p-8 space-y-2">
<DollarSign/>
<h3 className="font-semibold">Subscriptions</h3>
<p>Drivers and passengers subscribe for network access.</p>
</CardContent>
</Card>

<Card className="shadow-lg">
<CardContent className="p-8 space-y-2">
<Users/>
<h3 className="font-semibold">Ride Service Fee</h3>
<p>Small fee applied per successful ride.</p>
</CardContent>
</Card>

<Card className="shadow-lg">
<CardContent className="p-8 space-y-2">
<Rocket/>
<h3 className="font-semibold">Corporate Mobility</h3>
<p>Enterprise commuting solutions for organizations.</p>
</CardContent>
</Card>

</div>
</div>
)

const Impact = () => (
<div className="p-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
<h2 className="text-4xl font-bold mb-6">Environmental Impact</h2>
<div className="grid md:grid-cols-3 gap-8">

<Card className="bg-white/10 border-none">
<CardContent className="p-8">
<Leaf/>
<h3 className="font-semibold">Fuel Saved</h3>
<p>Millions of liters annually through shared rides.</p>
</CardContent>
</Card>

<Card className="bg-white/10 border-none">
<CardContent className="p-8">
<Car/>
<h3 className="font-semibold">Cars Reduced</h3>
<p>Fewer vehicles on the road during peak travel.</p>
</CardContent>
</Card>

<Card className="bg-white/10 border-none">
<CardContent className="p-8">
<Globe/>
<h3 className="font-semibold">CO₂ Reduction</h3>
<p>Lower emissions and greener cities.</p>
</CardContent>
</Card>

</div>
</div>
)

const Roadmap = () => (
<div className="p-16 bg-gray-100">
<h2 className="text-4xl font-bold mb-10">Startup Roadmap</h2>
<div className="grid md:grid-cols-4 gap-6">

<Card className="shadow-lg"><CardContent className="p-6">Prototype</CardContent></Card>
<Card className="shadow-lg"><CardContent className="p-6">Pilot Cities</CardContent></Card>
<Card className="shadow-lg"><CardContent className="p-6">Multi‑City Expansion</CardContent></Card>
<Card className="shadow-lg"><CardContent className="p-6">Global Mobility Network</CardContent></Card>

</div>
</div>
)

const Team = () => (
<div className="p-16 bg-gray-950 text-white">
<h2 className="text-4xl font-bold mb-6">Founders & Team</h2>
<p className="max-w-3xl">OnTheGo is being built by innovators focused on mobility, sustainability, and community technology. The team combines expertise in software engineering, mobility systems, and startup strategy.</p>
</div>
)

const FAQ = () => (
<div className="p-16 bg-white">
<h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
<div className="space-y-6 max-w-3xl">
<div>
<h3 className="font-semibold">Is this a taxi service?</h3>
<p>No. It is a cost‑sharing mobility network.</p>
</div>
<div>
<h3 className="font-semibold">How is safety ensured?</h3>
<p>User verification, ratings, ride tracking and trust scores.</p>
</div>
<div>
<h3 className="font-semibold">Can users schedule trips?</h3>
<p>Yes. Both real‑time and planned rides are supported.</p>
</div>
</div>
</div>
)

const Investment = () => (
<div className="p-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center">
<h2 className="text-4xl font-bold mb-4">Seed Investment Opportunity</h2>
<p className="text-lg">Seeking ₹2 Crore seed investment for pilot launch and product development.</p>
<div className="pt-6">
<Button size="lg">Download Investor Deck</Button>
</div>
</div>
)

return (
<div className="min-h-screen font-sans">
<Nav/>

{section==='hero' && <Hero/>}
{section==='product' && <Product/>}
{section==='screens' && <Screens/>}
{section==='technology' && <Technology/>}
{section==='business' && <Business/>}
{section==='impact' && <Impact/>}
{section==='roadmap' && <Roadmap/>}
{section==='team' && <Team/>}
{section==='faq' && <FAQ/>}
{section==='investment' && <Investment/>}

</div>
)
}
