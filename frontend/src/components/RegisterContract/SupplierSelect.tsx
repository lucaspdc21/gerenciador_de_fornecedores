interface SupplierSelectProps {
    suppliers: Supplier[];
    form: ReturnType<typeof Form.useForm>[0];
}
  
  const SupplierSelect: React.FC<SupplierSelectProps> = ({ suppliers, form }) => (
    <Form.Item name="supplier">
      <Select size="large" placeholder="Fornecedor">
        {suppliers.map(supplier => (
          <Select.Option key={supplier.key} value={supplier.key}>
            {supplier.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );