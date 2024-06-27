import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
const SelectOption = () => {
  return (
    <Select className="focus:ring-0 focus:ring-offset-0">
      <SelectTrigger className="w-10 p-0 m-0 border-0">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent className="w-8">
        <div className="w-6">
        <SelectItem className="text-secondary_text hover:text-primary leading-normal font-medium" value="en">EN</SelectItem>
        <SelectItem className="text-secondary_text hover:text-primary leading-normal font-medium" value="bn">BN</SelectItem>
        </div>
      </SelectContent>
    </Select>
  )
}

export default SelectOption