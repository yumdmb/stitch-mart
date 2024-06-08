const pdfkit = require('pdfkit');
const fs = require('fs');
const nodemailer = require('nodemailer');

app.post('/api/invoice', async (req, res) => {
  // Extract data from request body
  const { clientId, email, invoiceDetails } = req.body;

  // Generate PDF invoice
  const doc = new pdfkit();
  doc.text('Invoice');
  // Add invoice details to the PDF
  // For example:
  doc.text(`Client ID: ${clientId}`);
  doc.text(`Invoice Details: ${JSON.stringify(invoiceDetails)}`);
  // Save PDF to a file
  doc.pipe(fs.createWriteStream('invoice.pdf'));
  doc.end();

  // Send the PDF invoice as an email attachment
  try {
    const transporter = nodemailer.createTransport({
      // Configure email transport (e.g., SMTP)
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Invoice',
      text: 'Please find the invoice attached.',
      attachments: [
        {
          filename: 'invoice.pdf',
          path: 'invoice.pdf',
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending invoice:', error);
    res.status(500).json({ success: false, error: 'Failed to send invoice' });
  }
});