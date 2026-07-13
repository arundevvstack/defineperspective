import { SEO_ENTITIES } from '@/data/seo-knowledge-graph';

export type ContentType = 'CaseStudy' | 'Article' | 'Service';

export interface ContentNode {
  id: string;
  title: string;
  url: string;
  type: ContentType;
  topicIds: string[];
  description?: string;
  imageUrl?: string;
}

/**
 * Reusable logic that understands relationships between content based on shared topics.
 * In a real production environment, this would ideally fetch from Supabase.
 * For this isolated zero-regression architecture, we provide an interface to map known content.
 */
export class ContentRelationshipGraph {
  private nodes: ContentNode[] = [];

  constructor(initialNodes: ContentNode[] = []) {
    this.nodes = initialNodes;
  }

  public registerNode(node: ContentNode) {
    if (!this.nodes.find(n => n.id === node.id)) {
      this.nodes.push(node);
    }
  }

  public getRelatedContent(currentId: string, limit: number = 4): ContentNode[] {
    const currentNode = this.nodes.find(n => n.id === currentId);
    if (!currentNode) return [];

    // Calculate relevance score based on shared topics
    const scoredNodes = this.nodes
      .filter(n => n.id !== currentId)
      .map(node => {
        const sharedTopics = node.topicIds.filter(t => currentNode.topicIds.includes(t));
        return { node, score: sharedTopics.length };
      })
      .filter(scored => scored.score > 0)
      .sort((a, b) => b.score - a.score);

    return scoredNodes.slice(0, limit).map(s => s.node);
  }
  
  public getContentByTopic(topicId: string): ContentNode[] {
    return this.nodes.filter(n => n.topicIds.includes(topicId));
  }
}

// Singleton instance to be populated by the application layer as needed
export const globalContentGraph = new ContentRelationshipGraph();
