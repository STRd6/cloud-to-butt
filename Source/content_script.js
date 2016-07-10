walk(document);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bIoT\b/ig, "scrotum");
	v = v.replace(/\bInternet of Things\b/g, "Pair of Testicles");
	v = v.replace(/\bInternet of things\b/g, "Pair of testicles");
	v = v.replace(/\binternet of things\b/ig, "pair of testicles");

	textNode.nodeValue = v;
}
