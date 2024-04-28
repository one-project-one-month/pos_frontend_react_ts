import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"

interface Column {
    label: string;
    key: string;
    align?: 'left' | 'center' | 'right';
    width?: number;
  }

interface TableProps<T>{
    data: T[],
    columns: Column[],
    className?: string
}

export const useTable = <T,>({ data, columns, className }: TableProps<T>) => {
    const TableComponent = () => (
        <Table className={className}>
            <TableHeader>
                <TableRow>
                    {
                        columns.map((column,index) => (
                            <TableHead key={index}>{column.label}</TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.map((row,rowIndex)=>  (
                            <TableRow key={rowIndex}>
                                {
                                    columns.map((column,index) => (
                                        <TableCell key={index} align={column.align} width={column?.width}>{(row as any)[column.key]}</TableCell>
                                    ))
                                }
                            </TableRow>
                        )
                    )
                }
            </TableBody>
          </Table>
    )

    return {TableComponent}
}