import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductsPage({ params }: Props) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetail product={plainProduct} />;
}
