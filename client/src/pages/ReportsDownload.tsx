import { FileText, Download, Eye, Calendar, Building2, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import PDF files
import applicationForm from "@assets/JSSPDA_HOME_Application form 2021-22_1750102848675.pdf";
import auditReport2020 from "@assets/Audit Report 2019-20_1750102857934.pdf";
import auditReport2019 from "@assets/Audit Report 2018-19_1750102861008.pdf";
import auditReport2018 from "@assets/Audit Report 2017-18_1750102863088.pdf";
import mandatoryDisclosure from "@assets/JSSPDA Mandatory Disclosure_1750102868478.pdf";
import rtiDocument from "@assets/RTI-JSSPDA_1750102876676.pdf";

export default function ReportsDownload() {
  const documents = [
    {
      id: 1,
      title: "JSSPDA Home Application Form 2021-22",
      description: "Official application form for home admission process for the academic year 2021-22",
      category: "Application Forms",
      type: "Application",
      year: "2021-22",
      fileUrl: applicationForm,
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Audit Report 2019-20",
      description: "Comprehensive audit report for the financial year 2019-20",
      category: "Audit Reports",
      type: "Financial Audit",
      year: "2019-20",
      fileUrl: auditReport2020,
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "Audit Report 2018-19",
      description: "Comprehensive audit report for the financial year 2018-19",
      category: "Audit Reports",
      type: "Financial Audit",
      year: "2018-19",
      fileUrl: auditReport2019,
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      title: "Audit Report 2017-18",
      description: "Comprehensive audit report for the financial year 2017-18",
      category: "Audit Reports",
      type: "Financial Audit",
      year: "2017-18",
      fileUrl: auditReport2018,
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 5,
      title: "JSSPDA Mandatory Disclosure",
      description: "Mandatory disclosure document containing comprehensive institutional information as per AICTE requirements",
      category: "Compliance Documents",
      type: "AICTE Disclosure",
      year: "Current",
      fileUrl: mandatoryDisclosure,
      icon: <Shield className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 6,
      title: "RTI Information - JSSPDA",
      description: "Right to Information document with detailed institutional information and organizational structure",
      category: "Information Documents",
      type: "RTI Document",
      year: "Current",
      fileUrl: rtiDocument,
      icon: <Info className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const handleViewOnline = (fileUrl: string, title: string) => {
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (fileUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categorySet = new Set(documents.map(doc => doc.category));
  const categories: string[] = [];
  categorySet.forEach(category => categories.push(category));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Reports and Download</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access official documents, reports, and forms from JSS Polytechnic for the Differently Abled
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Category Filters */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">Document Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {documents.map((document) => (
                <Card key={document.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${document.color.split(' ')[0]} flex items-center justify-center`}>
                        {document.icon}
                      </div>
                      <Badge className={document.color}>
                        {document.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">{document.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {document.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{document.year}</span>
                      </div>
                      <div className="text-sm text-secondary font-medium">
                        {document.category}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleViewOnline(document.fileUrl, document.title)}
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Online
                      </Button>
                      <Button
                        onClick={() => handleDownload(document.fileUrl, document.title)}
                        variant="outline"
                        className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Information Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Document Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-primary mb-2">Official Documents</h4>
                    <p className="text-gray-600 text-sm">All documents are official and authenticated by JSSPDA administration</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-secondary mb-2">Compliance Ready</h4>
                    <p className="text-gray-600 text-sm">Documents comply with AICTE and government regulations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-primary mb-2">Easy Access</h4>
                    <p className="text-gray-600 text-sm">View online or download for offline reference</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Need Additional Documents?</h3>
              <p className="text-gray-700 mb-4">
                If you require additional documents or have questions about any of the available reports, please contact our administration office.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center">
                  <span className="font-medium text-secondary mr-2">Phone:</span>
                  <a href="tel:08212548315" className="text-primary hover:underline">0821-2548315</a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-secondary mr-2">Email:</span>
                  <a href="mailto:jsspda@gmail.com" className="text-primary hover:underline">jsspda@gmail.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}