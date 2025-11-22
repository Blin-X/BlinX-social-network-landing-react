import { motion } from 'framer-motion';
import { Server, CheckCircle, XCircle, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';

interface SystemStatus {
  name: string;
  status: 'operational' | 'degraded' | 'maintenance' | 'outage';
  description: string;
  uptime: string;
}

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  const systems: SystemStatus[] = [
    {
      name: "Website",
      status: "operational",
      description: "Main BlinX web interface",
      uptime: "99.9%"
    },
    {
      name: "API",
      status: "operational", 
      description: "Platform main API",
      uptime: "99.8%"
    },
    {
      name: "Database",
      status: "operational",
      description: "Main database",
      uptime: "99.95%"
    },
    {
      name: "Authentication",
      status: "degraded",
      description: "Login and registration system",
      uptime: "98.2%"
    },
    {
      name: "Media server",
      status: "operational",
      description: "Media storage and processing",
      uptime: "99.7%"
    }
  ];

  const statusConfig = {
    operational: { icon: CheckCircle, color: "text-green-400", bgColor: "bg-green-500/20", label: "Operational" },
    degraded: { icon: AlertTriangle, color: "text-yellow-400", bgColor: "bg-yellow-500/20", label: "Degraded" },
    maintenance: { icon: Clock, color: "text-blue-400", bgColor: "bg-blue-500/20", label: "Maintenance" },
    outage: { icon: XCircle, color: "text-red-400", bgColor: "bg-red-500/20", label: "Outage" }
  };

  const refreshStatus = () => {
    setLastUpdated(new Date());
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hero section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-6 py-3 mb-6">
              <Server className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">System status</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">BlinX Status</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Current information about all platform systems operation
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8 mb-8 text-center"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Overall Status</h2>
              <motion.button
                onClick={refreshStatus}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-green-400">All systems operational</span>
            </div>
            
            <p className="text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString('en-US')}
            </p>
          </motion.div>

          {/* System details */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">System Status</h3>
            
            {systems.map((system, index) => {
              const StatusIcon = statusConfig[system.status].icon;
              const statusColor = statusConfig[system.status].color;
              const statusBgColor = statusConfig[system.status].bgColor;
              const statusLabel = statusConfig[system.status].label;

              return (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:glass-dark transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${statusBgColor}`}>
                        <StatusIcon className={`w-6 h-6 ${statusColor}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{system.name}</h4>
                        <p className="text-gray-400">{system.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${statusBgColor}`}>
                        <StatusIcon className={`w-3 h-3 ${statusColor}`} />
                        <span className={statusColor}>{statusLabel}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Uptime: {system.uptime}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8 mt-8"
          >
            <h3 className="text-xl font-bold mb-6">Recent Incidents</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Authentication system maintenance</h4>
                  <p className="text-gray-300 text-sm mb-2">Scheduled technical maintenance - temporary delays possible</p>
                  <div className="text-xs text-gray-400">Start: 11/18/2025 03:00 • Expected duration: 2 hours</div>
                </div>
              </div>
              
              <div className="text-center text-gray-400 py-4">
                No active critical incidents
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}