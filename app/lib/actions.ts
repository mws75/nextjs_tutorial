'use server';

export async function createInvoice(formData: FormData) {
  console.log('button was pressed');
  const rawData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  console.log(rawData);
}
