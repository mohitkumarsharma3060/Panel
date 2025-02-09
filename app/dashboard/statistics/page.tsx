'use client';
import { MetricsCard } from "@/components/metrics-card";
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StatsChart() {
  // Sample Data for Writers, Readers, Services, and Leads
  const [data] = useState([
    { month: 'Jan', writer: 30, reader: 50, service: 20, lead: 40 },
    { month: 'Feb', writer: 45, reader: 60, service: 30, lead: 55 },
    { month: 'Mar', writer: 60, reader: 80, service: 40, lead: 75 },
    { month: 'Apr', writer: 80, reader: 100, service: 55, lead: 90 },
    { month: 'May', writer: 95, reader: 120, service: 70, lead: 100 },
    { month: 'Jun', writer: 110, reader: 150, service: 85, lead: 120 },
  ]);

  return (
    <Card className="shadow-lg border border-gray-200 bg-white p-6">
       <h2 className="text-4xl mt-2 text-center text-blue-700 py-8">Statistic and Income</h2>
       <div className="grid gap-4 md:grid-cols-3 ">
       
              <MetricsCard
                title="Reader Leads"
                value="$74,892"
                change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
              />
              <MetricsCard
                title="Writer Leads"
                value="$54,892"
                change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
              />
              <MetricsCard
                title="Services Lead"
                value="$20,892"
                change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
              />
            </div>
      
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4 mt-5 py-4 text-black text-center">Writers, Readers, Services & Leads Stats</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="writer" stroke="#4F46E5" strokeWidth={3} name="Writers" />
            <Line type="monotone" dataKey="reader" stroke="#F97316" strokeWidth={3} name="Readers" />
            <Line type="monotone" dataKey="service" stroke="#16A34A" strokeWidth={3} name="Services" />
           
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
