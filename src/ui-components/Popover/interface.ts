export interface PopoverProps {
    content: React.ReactNode;
    position: 'bottomleft' | 'bottomright';
    popoverBodyClassName?: string;
}

export interface PopoverChildrenPosition {
    top: number;
    right: number;
    left: number;
    bottom: number;
}

export interface PopoverState {
    show: boolean;
    childrenPosition: PopoverChildrenPosition;
    contentWidth: number;
}