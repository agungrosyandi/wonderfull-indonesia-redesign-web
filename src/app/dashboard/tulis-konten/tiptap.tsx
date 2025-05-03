"use client";

import { Toggle } from "@/components/ui/toggle";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Strikethrough } from "lucide-react";
import { useFormContext } from "react-hook-form";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

const Tiptap = ({ val }: { val: string }) => {
  const { setValue } = useFormContext();

  const editor = useEditor({
    // extension -------------------------

    extensions: [
      Placeholder.configure({
        placeholder: "Add description ......",
        emptyNodeClass:
          "first:before:text-gray-600 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none ",
      }),
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
      }),
    ],

    // update editor -------------------------

    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      setValue("description", content, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      },
    },
    content: val,
  });

  // mourn using useEffect  -------------------------

  useEffect(() => {
    if (editor?.isEmpty) editor.commands.setContent(val);
  }, [val]);

  // Component tiptap   -------------------------

  return (
    <div className="flex flex-col gap-2">
      {editor && (
        <div className="border-input border rounded-md">
          <Toggle
            pressed={editor.isActive("bold")}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            size={"sm"}
          >
            <Bold />
          </Toggle>
          <Toggle
            pressed={editor.isActive("italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            size={"sm"}
          >
            <Italic />
          </Toggle>
          <Toggle
            pressed={editor.isActive("strike")}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            size={"sm"}
          >
            <Strikethrough />
          </Toggle>
          <Toggle
            pressed={editor.isActive("orderList")}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
            size={"sm"}
          >
            <ListOrdered />
          </Toggle>
          <Toggle
            pressed={editor.isActive("bulletList")}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
            size={"sm"}
          >
            <List />
          </Toggle>
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
