import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface Category {
  label: string;
  options: Option[];
}

const options: Category[] = [
  {
    label: "Fruits",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
      { label: "Spinach", value: "spinach" },
    ],
  },
];

export default function Test() {
  const [selected, setSelected] = useState<Category | null>(null); // Specify the type as Category or null
  console.log(selected);

  return (
    <>
      <select
        onChange={(e) =>
          setSelected(
            options.find((opt) => opt.label === e.target.value) || null
          )
        }
      >
        {options.map((opt) => (
          <option key={opt.label} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>

      <select>
        {selected?.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}
