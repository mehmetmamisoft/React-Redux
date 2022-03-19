import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProducDetail = ({
  //propslar hepsi buraya yaz
  categories,
  product,
  onSave,
  onChange,
  errors,
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        // error="Hata" burasu boş nesne
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        // error="Hata" burasu boş nesne
        error={errors.categoryId}
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        // error="Hata" burasu boş nesne
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        // error="Hata" burasu boş nesne
        error={errors.quantityPerUnit}
      />
      <TextInput
        name="unitsInStock"
        label="units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        // error="Hata" burasu boş nesne
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProducDetail;
