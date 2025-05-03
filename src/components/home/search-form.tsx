// "use client";

// import * as React from "react";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import SearchFormsIcon from "./search-forms-icon";
// import SearchFormInput from "./search-form-input";

// export function SearchForm() {
//   const { open, setOpen } = useSearch();

//   return (
//     <Dialog
//       open={open}
//       onOpenChange={() => {
//         setOpen(!open);
//       }}
//     >
//       <DialogTrigger
//         onClick={() => {
//           setOpen(!open);
//         }}
//       >
//         {/* child component search icons */}
//         <SearchFormsIcon />
//         {/* child component search icons */}
//       </DialogTrigger>

//       <DialogContent className="w-[95%] mx-auto min-h-[80vh top-[40%] max-h-[80vh] overflow-hidden flex-col tabletMinWidth:w-[100%]">
//         <DialogHeader className="w-full flex flex-col gap-5 ">
//           <DialogTitle className="">Destination List</DialogTitle>
//           {/* child component search form */}
//           <SearchFormInput />
//           {/* child component search form */}
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// }
