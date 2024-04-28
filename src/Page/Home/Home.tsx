import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UsersRound, Users, Receipt, Boxes } from "lucide-react"
import { useTable } from '@/hook/useCustomTable';
import { GridItemProps } from '@/type/type';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Revenue',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: labels.map(() => Math.floor(Math.random() * 20000) + 1),
      borderColor: '#f5f5f5',
      backgroundColor: '#f5f5f5',
      fill: true
    }
  ],
};

const products = [
  {
    "id": 1,
    "productName": "Handmade Soft Cheese",
    "price": 114,
    "quantity": 10,
    "total": 1140,
  },
  {
    "id": 1,
    "productName": "Handmade Soft Cheese",
    "price": 114,
    "quantity": 10,
    "total": 1140,
  },
  {
    "id": 2,
    "productName": "Handcrafted Soft Tuna",
    "price": 162,
    "quantity": 20,
    "total": 3240,
  },
  {
    "id": 3,
    "productName": "Modern Granite Sausages",
    "price": 176,
    "quantity": 9,
    "total": 1584,
  },
  {
    "id": 4,
    "productName": "Bespoke Bronze Soap",
    "price": 185,
    "quantity": 20,
    "total": 3700,
  },
]

const customers = [
  {
    "id": 1,
    "customerName": "Ms Fuma",
    "mobileNo": "0976622233",
    "amount": 10000,
    "number": 25
  },
  {
    "id": 2,
    "customerName": "Ms Lavenda",
    "mobileNo": "09255882712",
    "amount": 6000,
    "number": 7
  },
  {
    "id": 3,
    "customerName": "Ms. Evelyn Lee",
    "mobileNo": "09456123789",
    "amount": 5000,
    "number": 10
  },
  {
    "id": 4,
    "customerName": "Mr. William Jones",
    "mobileNo": "09789541230",
    "amount": 5000,
    "number": 50
  },
  {
    "id": 5,
    "customerName": "Dr. Olivia Garcia",
    "mobileNo": "09321478569",
    "amount": 4000,
    "number": 34
  },
]

export const Home = () => {

  const { TableComponent: ProductTable } = useTable({
    data: products,
    columns: [
      { label: 'No.', key: 'id' },
      { label: 'Product Name', key: 'productName' },
      { label: 'Quantity', key: 'quantity', align: 'center' },
      { label: 'Price', key: 'price' },
      { label: 'Total', key: 'total', align: 'center' },
    ],
  })

  const { TableComponent: CustomerTable } = useTable({
    data: customers,
    columns: [
      { label: 'No.', key: 'id' },
      { label: 'Customer Name', key: 'customerName' },
      { label: 'Phone Number', key: 'mobileNo', align: 'center' },
      { label: 'Total Purchase Amount', key: 'amount', width: 100 },
      { label: 'Number of Purchases', key: 'number', width: 100, align: 'center' },
    ],
  });

  const GridItem = ({ icon, value, label }: GridItemProps) => (
    <div className="p-4 pb-0">
      <div className="rounded-full bg-slate-100 w-12 h-12 flex justify-center items-center mb-2">
        {icon}
      </div>
      <p className="text-2xl text-cyan-900 font-bold">{value}</p>
      <p>{label}</p>
    </div>
  );

  return (
    <div className="w-4/5 mx-auto mt-4">
      <div className="rounded-2xl mb-8 shadow-md flex gap-4 p-4 bg-gradient-to-tr from-slate-100 to-slate-300">
        <div className="grid grid-rows-2 grid-cols-2 w-2/4">
          <GridItem icon={<UsersRound />} value="50" label="Total Customer" />
          <GridItem icon={<Users />} value="2" label="Total Staff" />
          <GridItem icon={<Boxes />} value="120" label="Total Sales" />
          <GridItem icon={<Receipt />} value="$20000" label="Total Revenue" />
        </div>
        <div className='flex-1'>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='rounded-2xl shadow-md px-5 py-2'>
          <h1 className={"my-2 text-tertiary dark:text-dark-tertiary font-bold text-xl"}>Best Selling Product</h1>
          <ProductTable />
        </div>
        <div className='rounded-2xl shadow-md px-5 py-2'>
          <h1 className={"my-2 text-tertiary dark:text-dark-tertiary font-bold text-xl"}>Top Customers</h1>
          <CustomerTable />
        </div>
      </div>
    </div>
  )
};
