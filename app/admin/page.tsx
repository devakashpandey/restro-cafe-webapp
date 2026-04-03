"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Star,
  IndianRupee,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  LayoutDashboard,
  UtensilsCrossed,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { adminStats } from "@/lib/data";
import Link from "next/link";

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AdminPage() {
  const statusColors = {
    confirmed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  const statusIcons = {
    confirmed: CheckCircle2,
    pending: AlertCircle,
    cancelled: XCircle,
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#0e0e0e] border-r border-white/5 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-full gradient-bistro flex items-center justify-center">
            <span className="text-primary-foreground font-bold font-heading">E</span>
          </div>
          <div>
            <h2 className="font-bold font-heading text-sm">Ember & Oak</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: CalendarDays, label: "Reservations", active: false },
            { icon: UtensilsCrossed, label: "Menu Manager", active: false },
            { icon: Users, label: "Customers", active: false },
            { icon: MessageSquare, label: "Reviews", active: false },
            { icon: BarChart3, label: "Analytics", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                item.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/3"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-2 pt-4 border-t border-white/5">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/3 transition-all"
          >
            <ArrowUpRight className="w-4 h-4" />
            View Website
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-red-400 hover:bg-red-400/5 transition-all">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 glass border-b border-white/5 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold font-heading">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Marcus</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground hidden sm:block">
                <Clock className="w-3.5 h-3.5 inline mr-1" />
                Last updated: just now
              </span>
              <div className="w-9 h-9 rounded-full gradient-bistro flex items-center justify-center text-sm font-bold text-primary-foreground">
                MC
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                label: "Total Bookings",
                value: adminStats.totalBookings.toLocaleString(),
                icon: CalendarDays,
                change: "+12.5%",
                up: true,
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                label: "Total Customers",
                value: adminStats.totalCustomers.toLocaleString(),
                icon: Users,
                change: "+8.2%",
                up: true,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
              },
              {
                label: "Avg Rating",
                value: adminStats.avgRating.toString(),
                icon: Star,
                change: "+0.2",
                up: true,
                color: "text-amber-400",
                bg: "bg-amber-400/10",
              },
              {
                label: "Revenue",
                value: `$${(adminStats.revenue / 1000).toFixed(1)}K`,
                icon: IndianRupee,
                change: "+18.4%",
                up: true,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div
                    className={`flex items-center gap-0.5 text-xs font-medium ${
                      stat.up ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {stat.up ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold font-heading">
                   {stat.label === "Revenue" ? "₹" : ""}{stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid xl:grid-cols-3 gap-6">
            {/* Recent Reservations */}
            <motion.div
              {...stagger}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="xl:col-span-2 glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-semibold text-lg">
                  Recent Reservations
                </h3>
                <button className="text-xs text-primary hover:underline">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5 text-muted-foreground text-left">
                      <th className="pb-3 font-medium">Guest</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Time</th>
                      <th className="pb-3 font-medium">Guests</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminStats.recentReservations.map((res) => {
                      const StatusIcon = statusIcons[res.status];
                      return (
                        <tr key={res.id} className="border-b border-white/3 hover:bg-white/2 transition-colors">
                          <td className="py-3.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-muted-foreground">
                                {res.name.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <span className="font-medium">{res.name}</span>
                            </div>
                          </td>
                          <td className="py-3.5 text-muted-foreground">{res.date}</td>
                          <td className="py-3.5 text-muted-foreground">{res.time}</td>
                          <td className="py-3.5 text-muted-foreground">{res.guests}</td>
                          <td className="py-3.5">
                            <Badge
                              variant="outline"
                              className={`text-[10px] uppercase tracking-wider py-1 ${statusColors[res.status]}`}
                            >
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {res.status}
                            </Badge>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Monthly Chart */}
            <motion.div
              {...stagger}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-semibold text-lg">
                  Monthly Bookings
                </h3>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-48 mb-4">
                {adminStats.monthlyBookings.map((item, i) => {
                  const maxCount = Math.max(...adminStats.monthlyBookings.map((m) => m.count));
                  const height = (item.count / maxCount) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="flex-1 relative group"
                    >
                      <div
                        className="w-full rounded-t-lg gradient-bistro opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
                        style={{ height: "100%" }}
                      />
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.count}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex justify-between text-xs text-muted-foreground">
                {adminStats.monthlyBookings.map((item, i) => (
                  <span key={i}>{item.month}</span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">This Month</span>
                  <span className="font-semibold text-primary">258 bookings</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Growth</span>
                  <span className="text-emerald-400 font-medium">+21.7%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            {...stagger}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {[
              {
                label: "Add New Dish",
                desc: "Update the menu with new items",
                icon: UtensilsCrossed,
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                label: "Manage Reviews",
                desc: "Respond to customer reviews",
                icon: MessageSquare,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
              },
              {
                label: "Export Report",
                desc: "Download analytics as PDF",
                icon: BarChart3,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10",
              },
            ].map((action, i) => (
              <button
                key={i}
                className="glass rounded-xl p-5 text-left hover:border-white/10 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <p className="font-medium text-sm">{action.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{action.desc}</p>
              </button>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
