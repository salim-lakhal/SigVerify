// components/ui/table.tsx
import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ children, className = '' }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    {children}
  </table>
);

interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);

interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => (
  <tr>{children}</tr>
);

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({ children, className = '' }) => (
  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

interface TableBodyProps {
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ children, className = '' }) => (
  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${className}`}>
    {children}
  </td>
);
