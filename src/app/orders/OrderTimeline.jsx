import { Package, Truck, CheckCircle } from 'lucide-react';
import React from 'react';

const OrderTimeline = ({ order }) => {
  const steps = [
    { name: 'Procesando', icon: Package, color: 'bg-teal-500' },
    { name: 'Enviado', icon: Truck, color: 'bg-teal-500' },
    { name: 'Entregado', icon: CheckCircle, color: 'bg-teal-500' },
  ];

  const currentStep = steps.findIndex((step) => step.name === order.estate);

  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index <= currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step.name} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                  ${isActive ? 'bg-teal-500 text-white scale-110' : 'bg-gray-200 text-gray-400'}
                  ${isCurrent ? 'animate-pulse' : ''}
                `}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span className={`mt-2 text-sm font-medium ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-200 rounded">
                <div
                  className="h-full bg-teal-500 rounded transition-all duration-1000"
                  style={{ width: index < currentStep ? '100%' : isCurrent ? '50%' : '0%' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderTimeline;
