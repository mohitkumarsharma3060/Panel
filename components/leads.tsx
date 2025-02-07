/* Leads Component */
"use client";

import React, { useState, useEffect } from "react";

interface Lead {
  id: string;
  fullname?: string;
  name?: string;
  email?: string;
  emailId?: string;
  role?: string;
  companyName?: string;
  ownerName?: string;
  interestedIn?: string;
}

const Leads = () => {
  const [leadType, setLeadType] = useState<"writerLead" | "readerLead" | "serviceLead">("writerLead");
  const [search, setSearch] = useState("");
  const [leadsData, setLeadsData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      setError("");
      try {
        const url =
          leadType === "serviceLead"
            ? "https://thoughtloomapis-316619097046.asia-south1.run.app/lead/getServiceLead"
            : "https://thoughtloomapis-316619097046.asia-south1.run.app/profile/writerProfile/getWriterLead";

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch leads");

        const data = await response.json();
        setLeadsData(
          leadType === "serviceLead"
            ? data.data
            : data.data.filter((item: any) => item.leadType === leadType)
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch leads");
        setLeadsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, [leadType]);

  const filteredLeads = leadsData.filter((lead) => {
    const searchTerm = search.toLowerCase();
    return leadType === "serviceLead"
      ? [lead.companyName, lead.ownerName, lead.emailId, lead.interestedIn].some(
          (field) => field?.toLowerCase().includes(searchTerm)
        )
      : [lead.fullname, lead.email, lead.name].some((field) =>
          field?.toLowerCase().includes(searchTerm)
        );
  });

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Leads Dashboard</h1>
        <p className="text-gray-600">Manage all your leads in one place</p>
      </header>
      
      {/* Lead Type Selection */}
      <div className="flex justify-center gap-4 mb-4">
        <select
          id="leadType"
          value={leadType}
          onChange={(e) => setLeadType(e.target.value as "writerLead" | "readerLead" | "serviceLead")}
          className="px-4 py-2 rounded-lg bg-gray-200 text-black border border-gray-300 focus:ring-2 focus:ring-purple-800"
        >
          <option value="writerLead">Writer Lead</option>
          <option value="readerLead">Reader Lead</option>
        </select>
        <button
          onClick={() => setLeadType("serviceLead")}
          className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
            leadType === "serviceLead" ? "bg-purple-600 text-white" : "bg-gray-300 text-black hover:bg-purple-500 hover:text-white"
          }`}
        >
          Service Lead
        </button>
      </div>

      {/* Search Field */}
      <div className="relative max-w-md mx-auto mb-4">
        <input
          type="text"
          placeholder={`Search by ${leadType === "serviceLead" ? "company, owner, or email" : "name or email"}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
        />
      </div>
    </div>
  );
};

export default Leads;