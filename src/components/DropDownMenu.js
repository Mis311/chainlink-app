import Select from 'react-dropdown-select';

const options = [
  { value: 'start-fundraise', label: 'Start Fundraise' }

];

export default function DropdownMenu() {
  return (
    <Select options={options} />
  );
}
